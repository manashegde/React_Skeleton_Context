import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import NotFound from "components/NotFound";
import Loading from "components/Loading";
import ErrorBoundary from "components/ErrorBoundary";
import DataMaintContextProvider from "contexts/dataMaintenance";
import { routePaths } from "containers/Routes";

const AsyncInquiryUpdate = Loadable({
  loader: () => import("containers/DataMaintenance/InquiryUpdate"),
  loading: Loading
});

class DataMaintenance extends React.Component {
  render() {
    return (
      <DataMaintContextProvider>
        <ErrorBoundary>
          <div id="inquiry-update" style={{ flexGrow: "1" }}>
            <Switch>
              <Route
                exact
                path={routePaths.dataMaintenance.inquiryUpdate}
                component={AsyncInquiryUpdate}
              />

              <Route component={NotFound} />
            </Switch>
          </div>
        </ErrorBoundary>
      </DataMaintContextProvider>
    );
  }
}

export default DataMaintenance;
