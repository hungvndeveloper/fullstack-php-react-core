import Component from "../../Core/Component";
import "./Toggle.scss";
export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }

  handleToggle = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    const { status } = this.state;

    const wrap = document.createElement("div");
    const content = document.createElement("div");
    content.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sit a nemo delectus omnis aut quasi totam atque cupiditate recusandae? Commodi, excepturi dolorem asperiores quia culpa provident! Adipisci, odio accusamus.`;
    content.className = `${status ? "open" : "close"}`;

    wrap.appendChild(content);

    const button = document.createElement("button");
    button.innerText = `${status ? "Hide" : "Show"}`;
    button.onclick = this.handleToggle;

    wrap.appendChild(button);

    return wrap;
  }
}
