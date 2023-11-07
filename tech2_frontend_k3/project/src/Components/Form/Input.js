import Component from "../../Core/Component";
export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, title } = this.props;

    const wrap = document.createElement("div");

    const label = document.createElement("label");
    label.innerText = title;

    wrap.appendChild(label);

    const input = document.createElement("input");

    input.type = "text";
    input.name = name;
    input.placeholder = `${title}...`;

    wrap.appendChild(input);

    return wrap;
  }
}
