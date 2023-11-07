import React, { Component, useContext } from "react";
import { ThemeContext } from "./Theme";
// const withContext = (ParentComponent) => {
//   return class extends Component {
//     constructor(props) {
//       super(props);
//     }

//     render() {
//       return (
//         <ThemeContext.Consumer>
//           {(context) => <ParentComponent context={context} {...this.props} />}
//         </ThemeContext.Consumer>
//       );
//     }
//   };
// };

const withContext = (ParentComponent) => (props) => {
  const context = useContext(ThemeContext);
  return <ParentComponent context={context} {...props} />;
};

export default withContext;

/*
Higher Order Component `withContext`
- Nhận dữ liệu từ context thông qua props
- Props context sẽ là 1 object
*/
