import React, { Component } from "react";
import Text from "./Text";
import { ThemeContext } from "./Theme";
import withContext from "./withContext";

export class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { context } = this.props;

    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam
          doloremque voluptas, vel illum, ipsam non voluptatibus nobis saepe
          vero vitae itaque dolorum fugit error consectetur quidem amet quod
          necessitatibus.
        </p>
        <Text />
        <p>Current Theme: {context.theme}</p>
      </div>
    );
  }
}

export default withContext(Content);
