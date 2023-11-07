import React from "react";

const PreventRender = (ParentComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    //Nếu return true => Chạy render()
    shouldComponentUpdate = (nextProps) => {
      if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
        return true;
      }

      return false;
    };

    render() {
      return <ParentComponent {...this.props} />;
    }
  };
};

export default PreventRender;
