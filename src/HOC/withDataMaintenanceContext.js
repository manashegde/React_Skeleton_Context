import React from "react";
import { DataMaintContextConsumer } from "contexts/dataMaintenance";

export default function withDataMaintenanceContext(WrappedComponent) {
  class C extends React.Component {
    render() {
      return (
        <DataMaintContextConsumer>
          {dataMaintenanceContext => (
            <WrappedComponent
              {...this.props}
              dataMaintenanceContext={dataMaintenanceContext}
            />
          )}
        </DataMaintContextConsumer>
      );
    }
  }
  C.displayName = `withDataMaintenanceContext(${WrappedComponent.displayName ||
    WrappedComponent.name})`;
  return C;
}
