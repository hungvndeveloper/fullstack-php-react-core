import React, { Component } from "react";

// export default function Color(Component) {
//   //   class ChildrenComponent extends React.Component {
//   //     constructor() {
//   //       super();
//   //     }

//   //     getRandomColor = () => {
//   //       var letters = "0123456789ABCDEF";
//   //       var color = "#";
//   //       for (var i = 0; i < 6; i++) {
//   //         color += letters[Math.floor(Math.random() * 16)];
//   //       }
//   //       return color;
//   //     };

//   //     render() {
//   //       return (
//   //         <div style={{ background: this.getRandomColor() }}>
//   //           <Component />
//   //         </div>
//   //       );
//   //     }
//   //   }

//   const ChildrenComponent = () => {
//     const getRandomColor = () => {
//       var letters = "0123456789ABCDEF";
//       var color = "#";
//       for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
//     };
//     return (
//       <div style={{ background: getRandomColor(), fontStyle: "italic" }}>
//         <Component />
//       </div>
//     );
//   };

//   return ChildrenComponent;
// }

const Color = (ParentComponent) => (props) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div style={{ background: getRandomColor(), fontStyle: "italic" }}>
      <ParentComponent {...props} />
    </div>
  );
};

export default Color;
