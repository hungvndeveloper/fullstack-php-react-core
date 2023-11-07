import "./Song.scss";
import Input from "../../Components/Form/Input";
import Component from "../../Core/Component";
export default class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    // console.log("re-render");
    // const { id } = this.props.data;
    // const song = document.createElement("h2");
    // song.innerText = "Chi tiết bài hát: " + id;
    // song.appendChild(this.compile(Input, { name: "name", title: "Tên" }));
    // song.appendChild(this.compile(Input, { name: "email", title: "Email" }));
    // song.appendChild(this.compile(Input, { name: "age", title: "Tuổi" }));
    // const h1 = document.createElement("h1");
    // h1.innerText = this.state.count;
    // song.appendChild(h1);
    // const button = document.createElement("button");
    // button.innerText = "+";
    // button.onclick = this.handleIncrement;
    // song.appendChild(button);
    // return song;

    return this.html`
   <div><h1>Count: ${this.state.count}</h1>
   <button onclick="${this.handleIncrement}">+</button></div>
    `;
  }
}
