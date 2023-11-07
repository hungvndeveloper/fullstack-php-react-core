import Component from "../../Core/Component";
import Navigation from "./Navigation";
import Menu from "./Menu";
import defaultAvatar from "../../Assets/Images/default_avatar.jpg";
import HttpClient from "../../Services/Api/HttpClient";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isFocusSearch: false,
      isShowAccount: false,
      menus: [],
    };

    this.client = new HttpClient(
      `https://my-json-server.typicode.com/citayesh/menu-api`
    );

    document.addEventListener("click", () => {
      this.handleFocusOutInput();
      this.handleHideAccount();
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        this.handleHideAccount();
      }
    });

    //console.log("constructor");
  }

  // componentDidUpdate = (prevState) => {
  //   console.log(prevState, this.state);
  //   console.log("component Did update");
  // };

  componentDidMount = () => {
    //console.log("component Did mount");
    this.getMenus();
  };

  getMenus = async () => {
    const { res, data } = await this.client.get("/menu");
    if (res.ok) {
      this.setState({
        menus: data,
      });
    }
  };

  handleFocusOutInput = () => {
    if (this.state.isFocusSearch) {
      this.setState({
        isFocusSearch: false,
      });
    }
  };

  handleFocusInput = (e) => {
    e.stopPropagation();
    if (!this.state.isFocusSearch) {
      this.setState({
        isFocusSearch: true,
      });
    }
  };

  handleToggle = (e) => {
    e.stopPropagation();
    this.setState({
      isShowAccount: !this.state.isShowAccount,
    });
  };

  handleHideAccount = () => {
    if (this.state.isShowAccount) {
      this.setState({
        isShowAccount: false,
      });
    }
  };

  render() {
    const { isFocusSearch, isShowAccount, menus } = this.state;

    const header = this.html`
    <header class="header">
      <div class="row">
        <div class="col-3">
          <div class="header__nav">
            <span>
              <i class="fa-solid fa-angle-left"></i>
            </span>
            <span>
              <i class="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </div>
        <div class="col-6">
          <nav class="header__menu">
            <ul>
              ${menus.map(({ title }) => `<li><a href="#">${title}</a></li>`)}
            </ul>
          </nav>
        </div>
        <div class="col-3">
          <div class="header__right">
            <form class="header__right--search">
              <div class="input-group ${isFocusSearch && "active"}">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input onfocus="${
                  this.handleFocusInput
                }" type="search" placeholder="Search">
              </div>
            </form>
            <div class="header__right--account">
                <span onclick="${this.handleToggle}">
                  <img src="${defaultAvatar}">
                </span>
                <ul class="${isShowAccount && "show"}">
                  <li><a href="">Settings</a></li>
                  <li><a href="">Login</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    `;
    return header;
  }
}
