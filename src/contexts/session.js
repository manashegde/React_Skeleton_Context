import * as React from "react";
import intl from "react-intl-universal";
import locales from "i18n";

import { urls } from "HOC/withApiService";

const SessionContext = React.createContext();
export const SessionContextConsumer = SessionContext.Consumer;

const localeOptions = {
  ar: "ar_SA",
  en: "en_US"
};

let initialState = {
  beforeUnloadCallbacks: [],
  i18nInitDone: false,
  spinner: 0,
  locale: localStorage.getItem("locale") || "en",
  isAuthenticated: false,
  notifications: [],
  pageCode: "",
  xbcState: null,
  userInfo: null,
  jwt1: "",
  jwt2: ""
};

const makeJwtExpireTime = exp => exp * 1000;

function makeNotificationType(type) {
  if (type === "INFO") {
    return "is-info";
  } else if (type === "SUCCESS") {
    return "is-success";
  } else if (type === "ERROR") {
    return "is-danger";
  } else {
    return type;
  }
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

const makeQueryString = obj =>
  Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join("&");

const compareRoles = (rolesToCompare, rolesOnState) =>
  rolesToCompare.every(r => rolesOnState[r]);

class SessionProvider extends React.Component {
  state = {
    ...initialState,

    _setState: (next, cb) => {
      if (typeof next === "function") {
        this.setState(
          state => next(state),
          () => {
            cb && cb(this.state);
            console.log("-------new session state:", this.state);
          }
        );
      } else {
        this.setState(
          state => ({
            ...next
          }),
          () => {
            cb && cb(this.state);
            console.log("------new session state:", this.state);
          }
        );
      }
    },

    startSpinner: () => {
      this.setState(state => ({
        ...state,
        spinner: ++state.spinner
      }));
    },

    stopSpinner: () => {
      let spinner = this.state.spinner;
      let nextState = --spinner;
      if (nextState < 0) {
        nextState = 0;
      }
      this.setState(state => ({
        ...state,
        spinner: nextState
      }));
    },

    changeLocale: () => {
      const newLocale = this.state.locale === "en" ? "ar" : "en";
      intl
        .init({
          currentLocale: newLocale,
          locales
        })
        .then(() => {
          this.setState(
            state => ({
              ...state,
              i18nInitDone: true,
              locale: newLocale
            }),
            () => {
              initialState.i18nInitDone = true;
              initialState.locale = newLocale;
              localStorage.setItem("locale", newLocale);
            }
          );
        });
    },

    removeNotification: id => {
      this.setState(state => ({
        notifications: state.notifications.filter(n => n.id !== id)
      }));
    },

    addNotification: ({
      id = Math.random().toString(),
      timeOutInMillis = 3000,
      type = "is-warning",
      message = ""
    }) => {
      message = typeof message === "string" ? message : JSON.stringify(message);
      type = makeNotificationType(type);
      const newNotifications = [
        ...this.state.notifications,
        { id, type, message, timeOutInMillis }
      ];
      this.setState({
        notifications: newNotifications
      });
    },

    sessionStorageSet: (key, val) => {
      try {
        sessionStorage.setItem(key, JSON.stringify(val));
      } catch (e) {
        console.error("-------- failed to set to session storage:", e);
      }
    },

    sessionStorageGet: key => {
      try {
        return JSON.parse(sessionStorage.getItem(key));
      } catch (e) {
        console.error("--------- failed to get from session storage:", e);
      }
    },

    hasRoles: roles => {
      try {
        if (Array.isArray(roles)) {
          return compareRoles(
            roles,
            this.state.xbcState.user.originalStringRoles
          );
        } else if (typeof roles === "string") {
          return compareRoles(
            roles.split(" "),
            this.state.xbcState.user.originalStringRoles
          );
        } else {
          console.error("---- roles must be a string or array");
          return;
        }
      } catch (e) {
        console.error("------- failed to check roles");
      }
    },

    post: ({ url, data, contentType, method, isUrlEncoded }) => {
      const jwt2 = this.state.sessionStorageGet("jwt2") || "";
      let headers = {
        "Content-Type": contentType || "application/x-www-form-urlencoded"
      };
      if (jwt2) headers["Authorization"] = `Bearer ${jwt2}`;
      return fetch(url, {
        body: isUrlEncoded ? data : JSON.stringify(data), // must match 'Content-Type' header
        headers,
        method: method || "POST", // *GET, POST, PUT, DELETE, etc.
        referrer: "no-referrer" // *client, no-referrer
      })
        .then(res => res.json().catch(err => res))
        .then(res => {
          if (res.status && res.status !== 200) {
            throw res;
          } else {
            return res;
          }
        })
        .catch(e => {
          throw e.message || e.statusText || "unknown post error";
        });
    },

    get: url => {
      return fetch(url)
        .then(res => res.json())
        .catch(e => {
          console.error("--------api get:", e);
          throw e.message || e.statusText || "unknown get error";
        });
    },

    parseJwt: token => {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(window.atob(base64));
    },

    callIdentityGateway: async ({ data }) => {
      console.log("mmnnss am here")
      this.state.sessionStorageSet("jwt1", "jwt1");
      this.state.sessionStorageSet("jwt2", "jwt2");
      this.state._setState({
            userInfo: "res.userInfo",
            jwt1: "res.userToken",
            tokenExp: "makeJwtExpireTime(parsedJwt.exp)"
          });
      this.state._setState({
        jwt2: "res.jwtToken",
        xbcState: "res.xbcState",
        tokenExp: "makeJwtExpireTime(parsedJwt.exp)"
      });
      // const urlEncoded = makeQueryString(data);

      // const res = await this.state.post({
      //   isUrlEncoded: true,
      //   url: urls.login,
      //   data: urlEncoded
      // });

      // if (res.errocode) {
      //   throw `${res.errocode}: ${res.desc || ""}`;
      // }

      // if (res.userToken) {
      //   this.state.sessionStorageSet("jwt1", res.userToken);
      //   // const parsedJwt = this.state.parseJwt(res.userToken);
      //   if (res.userInfo)
      //     this.state.sessionStorageSet("userInfo", res.userInfo);
      //   this.state._setState({
      //     userInfo: res.userInfo,
      //     jwt1: res.userToken
      //     // tokenExp: makeJwtExpireTime(parsedJwt.exp)
      //   });
      // }
    },

    refreshToken: () => {
      return new Promise(async (resolve, reject) => {
        // remove token so not attached to headers on this request
        this.state.sessionStorageSet("jwt2", "");
        const urlEncoded = makeQueryString({ Token: this.state.jwt1 });

        const res = await this.state.post({
          isUrlEncoded: true,
          url: urls.refreshToken,
          data: urlEncoded
        });

        if (res.userToken) {
          this.state.sessionStorageSet("jwt1", res.userToken);
          // const parsedJwt = this.state.parseJwt(res.userToken);
          this.state._setState({
            jwt1: res.userToken
          });
          resolve();
        } else {
          reject("----- failed to refresh token");
        }
      });
    },

    getXbcState: async () => {
      const userInfo =
        this.state.userInfo || this.state.sessionStorageGet("userInfo");
      const locale = this.state.locale;

      const data = {
        nicUser: {
          userToken: this.state.jwt1,
          userInfo,
          locale: localeOptions[locale]
        }
      };

      const res = await this.state.post({
        url: urls.postLogin,
        data
      });

      if (res.jwtToken) {
        res.jwtToken ="jwtToken"
          
        const parsedJwt = this.state.parseJwt(res.jwtToken);
        this.state.sessionStorageSet("jwt2", res.jwtToken);
        if (res.xbcState) {
          res.xbcState.user.originalStringRoles = res.xbcState.user.originalStringRoles.reduce(
            (prev, curr) => {
              prev[curr] = true;
              return prev;
            },
            {}
          );
        }
        this.state._setState({
          jwt2: res.jwtToken,
          xbcState: res.xbcState,
          tokenExp: makeJwtExpireTime(parsedJwt.exp)
        });
      }
    },

    registerBeforeUnloadCallback: cb => {
      if (typeof cb === "function") {
        this.state._setState(state => ({
          beforeUnloadCallbacks: [...state.beforeUnloadCallbacks, cb]
        }));
      }
    },

    signout: () => {
      sessionStorage.clear();
      this.setState({
        ...initialState
      });
    }
  };

  initLocale = () => {
    try {
      const locale = localStorage.getItem("locale") || "en";
      intl
        .init({
          currentLocale: locale,
          locales
        })
        .then(() => {
          this.setState(
            state => ({
              ...state,
              i18nInitDone: true,
              locale
            }),
            () => {
              initialState.i18nInitDone = true;
              console.log("--------- locale init success");
            }
          );
        });
    } catch (e) {
      console.error(e);
    }
  };

  initJwt = () => {
    try {
      const jwt1 = this.state.sessionStorageGet("jwt1") || "";
      const jwt2 = this.state.sessionStorageGet("jwt2") || "";

      const identityGatewayJwt = jwt1 !== "" ? this.state.parseJwt(jwt1) : {};
      const xbcGatewayJwt = jwt2 !== "" ? this.state.parseJwt(jwt2) : {};

      if (xbcGatewayJwt.XBC_STATE) {
        xbcGatewayJwt.XBC_STATE = JSON.parse(xbcGatewayJwt.XBC_STATE);
        if (
          xbcGatewayJwt.XBC_STATE.user &&
          xbcGatewayJwt.XBC_STATE.user.originalStringRoles
        ) {
          xbcGatewayJwt.XBC_STATE.user.originalStringRoles = xbcGatewayJwt.XBC_STATE.user.originalStringRoles.reduce(
            (prev, curr) => {
              prev[curr] = true;
              return prev;
            },
            {}
          );
        }
      }
      console.log("---------xbc gateway jwt:", xbcGatewayJwt);
      console.log("---------identity gateway jwt:", identityGatewayJwt);

      this.setState(
        state => ({
          ...state,
          jwt1,
          jwt2,
          xbcState: xbcGatewayJwt.XBC_STATE,
          tokenExp: makeJwtExpireTime(xbcGatewayJwt.exp)
        }),
        () => console.log("------- jwt init success")
      );
    } catch (e) {
      console.error(e);
    }
  };

  componentDidMount() {
    this.initLocale();
    this.initJwt();
  }

  render() {
    return (
      this.state.i18nInitDone && (
        <SessionContext.Provider value={this.state}>
          {this.props.children}
        </SessionContext.Provider>
      )
    );
  }
}

export default SessionProvider;
