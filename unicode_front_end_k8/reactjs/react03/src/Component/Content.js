import React, { Component, memo } from "react";

export class Content extends Component {
  render() {
    console.log(`re-render content`);
    return (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        quaerat eos obcaecati, corrupti asperiores totam ratione labore? Quae
        debitis quibusdam illo, quasi tempore aspernatur, earum impedit officia
        eum, mollitia ipsa.
      </div>
    );
  }
}

export default React.memo(Content);
