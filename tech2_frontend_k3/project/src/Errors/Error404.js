import Component from "../Core/Component";
export class Error404 extends Component {
  render() {
    const h1 = document.createElement("h1");
    h1.innerText = "Page not found";
    return h1;
  }
}
