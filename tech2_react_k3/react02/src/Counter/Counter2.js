import React from "react";
import { withRouter } from "./withRouter";

export const Couter2 = withRouter(
  class extends React.Component {
    render() {
      return <h1>Demo Counter</h1>;
    }
  }
);

// export const Couter2 = withRouter(() => {
//   return <h1>Demo Counter</h1>;
// });
