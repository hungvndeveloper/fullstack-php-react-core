import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Assets/Styles/Style.scss";

import Component from "./Core/Component";
import DefaultLayout from "./Layouts/DefaultLayout";
import Song from "./Pages/Song/Song";
export default class App extends Component {
  render = () => {
    const layout = this.compile(DefaultLayout);

    return layout;
  };
}
