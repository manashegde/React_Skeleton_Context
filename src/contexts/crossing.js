import * as React from "react";
// import { urls, post, makeCrossingUrlFor } from "HOC/withApiService";
import { urls, makeCrossingUrlFor } from "HOC/withApiService";
import withSessionContext from "HOC/withSessionContext";

const CrossingContext = React.createContext();

export const CrossingContextConsumer = CrossingContext.Consumer;

export const travelerTypes = {
  CITIZEN: "citizen",
  ALIEN: "alien",
  VISITOR: "visitor",
  PILGRIM: "pilgrim"
};

export const crossingTypes = {
  ARRIVAL: "arrival",
  DEPARTURE: "departure"
};

export const crossingActions = {
  SEARCH: "search",
  UPDATE: "update",
  COMPLETE: "complete"
};

let initialState = {
  carrierLookups: [],
  countryLookups: [],
  firstName: "",
  fatherName: "",
  grandfatherName: "",
  familyName: "",
  personId: "",
  occupation: "",
  birthDate: "",
  passportNumber: "",
  passportType: "",
  passportStatus: "",
  passportExpiryDate: "",
  hohId: "",
  hohStatus: "",
  hohFullName: "",
  isHOHPermitRequired: "",
  gender: "",
  hohPermitNumber: "",
  travelPassReason: "",
  travelPassNumber: "",
  crossingStatus: "",
  hohNotCrossing: false,
  movements: [],
  // expectedMovements: [],
  // selectedMovement: {},
  idNumber: "",
  isDependentsConfirmed: false,
  dependents: [],
  travelPermissionInfo: "",
  cwlHitOutput: [], //hit reports
  miscreantDetail: {},
  travelerType: travelerTypes.CITIZEN, //citizen | alien | visitor | pilgrim
  crossingType: "" // arrival | departure
};

class CrossingContextProvider extends React.Component {
  state = {
    ...initialState,

    _setState: (next, cb) => {
      if (typeof next === "function") {
        this.setState(
          state => next(state),
          () => {
            cb && typeof cb === "function" && cb(this.state);
            console.log("-------new crossing context:", this.state);
          }
        );
      } else {
        this.setState({ ...next }, () => {
          cb && typeof cb === "function" && cb(this.state);
          console.log("-------new crossing context:", this.state);
        });
      }
    },

    resetState: () => {
      this.setState(
        state => ({
          ...initialState,
          crossingType: state.crossingType //remember this so when crossing is complete, operator only has to choose traveler type
        }),
        () => {
          console.log("--------crossing context reset:", this.state);
        }
      );
    },

    searchCrossing: async ({ data, url }) => {
      const { post } = this.props.sessionContext;
      const { addNotification } = this.props.sessionContext;
      const searchRes = await post({
        url,
        data
      });

      if (searchRes.xbcErrors) {
        searchRes.xbcErrors.forEach(error => {
          addNotification({ message: error.desc });
        });
        throw "search crossing error";
      }

      if (searchRes.citizenDetailsOutput) {
        this.state._setState({
          ...searchRes.citizenDetailsOutput,
          travelDate: data.searchCitizenCrossingInput.travelDate
        });
      }
    },

    cancelCrossing: async () => {
      const { post } = this.props.sessionContext;
      const { crossingType } = this.state;

      const completeKey =
        crossingType === crossingTypes.ARRIVAL
          ? "completeCitizenArrivalInput"
          : "completeCitizenDepartureInput";

      const url = makeCrossingUrlFor(
        crossingActions.COMPLETE,
        this.state.travelerType,
        this.state.crossingType
      );
      return await post({
        method: "PUT",
        url,
        data: {
          [completeKey]: {
            cancelArrival: true
          }
        }
      });
    },

    completeCrossing: async isCancel => {
      const { post, addNotification } = this.props.sessionContext;
      const { crossingType } = this.state;
      const movement =
        this.state.movements.length === 1
          ? this.state.movements[0]
          : this.state.movements.filter(m => m.isSelected)[0];

      const completeKey =
        crossingType === crossingTypes.ARRIVAL
          ? "completeCitizenArrivalInput"
          : "completeCitizenDepartureInput";

      const cancelKey =
        crossingType === crossingTypes.ARRIVAL
          ? "cancelArrival"
          : "cancelDeparture";

      const nationalityCodeKey =
        crossingType === crossingTypes.ARRIVAL
          ? "originNationalityCode"
          : "destinationNationalityCode";

      const body = {
        [completeKey]: {
          [cancelKey]: isCancel,
          [nationalityCodeKey]: 109,
          personId: this.state.personId,
          personSequenceNumber: 762003,
          carrier: movement.carrierCode,
          documentNumber: "A123",
          documentType: 4,
          passportNumber: "A123", //this.state.passportNumber,
          passportType: 2, //this.state.passportType,
          shipName: "ship2",
          isPrivateFlight: movement.isPrivateFlight
        }
      };
      const url = makeCrossingUrlFor(
        crossingActions.COMPLETE,
        this.state.travelerType,
        this.state.crossingType
      );

      const successOutputKey =
        crossingType === crossingTypes.ARRIVAL
          ? "completeCitizenArrivalOutput"
          : "completeCitizenDepartureOutput";

      const res = await post({
        method: "PUT",
        url,
        data: body
      });

      if (res.xbcErrors) {
        res.xbcErrors.forEach(e => {
          addNotification({ message: e.desc });
        });
        throw "Error trying to complete crossing.";
      }

      if (res[successOutputKey]) {
        if (res[successOutputKey]["xbcMessages"]) {
          res[successOutputKey]["xbcMessages"].forEach(m => {
            addNotification({ message: m.desc, type: m.type });
          });
        }
      }
    },

    searchMovements: async () => {
      const { post } = this.props.sessionContext;
      const movementRes = await post({
        url: urls.crossing.fetchTripInfo,
        data: {
          //todo: use correct data
          fetchExpectedMovementsInput: {
            travelDocument: "122",
            samisId: 1234,
            natCode: 34,
            movementDirection: this.state.crossingType.toUpperCase()
          }
          //////////////////////////////////////////////////
        }
      });

      //todo: remove
      const rand = Math.round(Math.random());
      // const rand2 = Math.round(Math.random());
      if (rand) {
        movementRes.expectedMovements.push(movementRes.expectedMovements[0]);
      }
      // if (rand2) {
      //   movementRes.expectedMovements = [];
      // }
      //////////////////////////////////////////////////

      if (movementRes.expectedMovements) {
        this.state._setState({
          movements: movementRes.expectedMovements
        });
        return movementRes.expectedMovements;
      }

      throw "search movements error";
    },

    updateTripInfo: async () => {
      const { post } = this.props.sessionContext;
      const movement =
        (this.state.movements.length > 0 &&
          this.state.movements.filter(m => m.isSelected)[0]) ||
        {};

      const putData = {
        expectedMovement: {
          // ...movement,
          reference: "string",
          carrierCode: "string",
          carrierType: "string",
          documentNumber: "1119486651",
          documentNationality: "string"
        }
      };

      await post({
        url: urls.crossing.updateTripInfo,
        method: "PUT",
        data: putData
      });
    },

    searchCWL: async () => {
      const { post } = this.props.sessionContext;

      const res = await post({
        url: urls.crossing.searchCwl,
        data: {
          cWLHitInput: {
            personId: 1119486652,
            personType: this.state.travelerType.toUpperCase()
          }
        }
      });

      if (res.cWLHitOutput) {
        this.state._setState({
          cwlHitOutput: res.cWLHitOutput
        });
        return true;
      } else {
        return false;
      }
    }
  };

  render() {
    return (
      <CrossingContext.Provider value={this.state}>
        {this.props.children}
      </CrossingContext.Provider>
    );
  }
}

export default withSessionContext(CrossingContextProvider);
