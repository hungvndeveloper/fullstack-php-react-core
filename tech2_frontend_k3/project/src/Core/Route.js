import Navigo from "navigo";

export default class Route {
  constructor() {
    this.router = new Navigo("/");
  }

  navigate(path) {
    this.router.navigate(path);
  }
}
