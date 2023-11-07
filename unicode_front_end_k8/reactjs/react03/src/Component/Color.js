import React from "react";

const Color = (ParentComponent) => {
  return class extends React.Component {
    constructor() {
      super();
    }

    getRandomColor = () => {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    render() {
      return (
        <div style={{ background: this.getRandomColor() }}>
          <ParentComponent />
        </div>
      );
    }
  };
};

export default Color;
