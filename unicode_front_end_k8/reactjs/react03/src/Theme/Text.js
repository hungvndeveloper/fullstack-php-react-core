// import React, { Component } from "react";
// import { ThemeContext } from "./Theme";

// export class Text extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(context) => <h3 style={{ color: context.color }}>Text</h3>}
//       </ThemeContext.Consumer>
//     );
//   }
// }

// export default Text;

import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

const Text = () => {
  const context = useContext(ThemeContext);
  console.log(context);
  return <h3 style={{ color: context.color }}>Text</h3>;
};

export default Text;
