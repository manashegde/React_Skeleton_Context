import React from "react";

const xbcGatewayServicesElem = document.getElementById("xbcGatewayServicesEp");
const xbcGatewayUrl = xbcGatewayServicesElem
  ? xbcGatewayServicesElem.getAttribute("di")
  : "/nic-xbc-gateway/xbc/gateway/";

const nicIdentityServiceElem = document.getElementById("nicIdentityService");
const nicIdentityServiceUrl = nicIdentityServiceElem
  ? nicIdentityServiceElem.getAttribute("di")
  : "http://10.0.1.6:50010/mocks-gateway/xbc/mocks/gateway/";

export const urls = {
  login: `${nicIdentityServiceUrl}login/v1`,
  refreshToken: `${nicIdentityServiceUrl}token/refresh/v1`,
  postLogin: `${xbcGatewayUrl}security/post-login`,

  crossing: {
    arrival: {
      search: {
        citizen: `${xbcGatewayUrl}crossing/search/arrival/citizen`,
        alien: `${xbcGatewayUrl}crossing/search/arrival/alien`
      },
      complete: {
        citizen: `${xbcGatewayUrl}crossing/arrival/complete/citizen`,
        alien: `${xbcGatewayUrl}crossing/arrival/complete/alien`
      }
    },
    departure: {
      search: {
        citizen: `${xbcGatewayUrl}crossing/search/departure/citizen`
      },
      complete: {
        citizen: `${xbcGatewayUrl}crossing/departure/complete/citizen`
      }
    },
    specialSearch: `${xbcGatewayUrl}crossing/search/special`,
    lookup: `${xbcGatewayUrl}lookup/ref-data/`, //Bcr269BusRule/readAll`,
    fetchTripInfo: `${xbcGatewayUrl}crossing/search/tripInfo/fetch`,
    updateTripInfo: `${xbcGatewayUrl}crossing/search/tripInfo/update`,
    searchCwl: `${xbcGatewayUrl}crossing/cwl/search`,
    updateCwl: `${xbcGatewayUrl}crossing/cwl/update`,
    searchCwlDetails: `${xbcGatewayUrl}crossing/cwl/details`
  }
};

export function makeLookupUrl({ entity, pk, isReadAll }) {
  let out = urls.crossing.lookup + entity;
  if (isReadAll) {
    return out + "/readAll";
  } else {
    return out + "/read" + (pk ? `/${pk}` : "");
  }
}

export function makeCrossingUrlFor(action, travelerType, crossingType) {
  try {
    const { crossing } = urls;
    const result = [crossingType, action, travelerType].reduce((prev, curr) => {
      return prev[curr];
    }, crossing);
    console.log("------crossing url:", result);
    return result;
  } catch (e) {
    throw new Error(
      "failed to make crossing url: missing action, travelerType, or crossingType"
    );
  }
}

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}

export function post({ url, data, method }) {
  const jwt2 = sessionStorage.getItem("jwt2") || "";
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  };
  if (jwt2) headers["Authorization"] = `Bearer ${jwt2}`;
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
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
}

export function get(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(e => {
      console.error("--------api get:", e);
      throw e.message || e.statusText || "unknown get error";
    });
}

//DO NOT USE THIS ANYMORE.
//USE POST AND GET METHODS FROM SESSIONCONTEXT INSTEAD
export default function withApiService(WrappedComponent) {
  class C extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          apiService={{ post, get, urls, parseJwt }}
        />
      );
    }
  }
  C.displayName = `withApiService(${WrappedComponent.displayName ||
    WrappedComponent.name})`;
  return C;
}
