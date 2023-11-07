import "./Header.css";
import logo from "../../assets/images/UNICODE_logo.png";

function Header() {
  return `<header>
      <div class="container">
        <h1>Header</h1>
        <img src="${logo}" />
      </div>
    </header>`;
}

export default Header;
