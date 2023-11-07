import Component from "../../Core/Component";

export default class Profile extends Component {
  render() {
    const h1 = document.createElement("h1");
    h1.innerText = `Profile`;
    return h1;
  }
}
