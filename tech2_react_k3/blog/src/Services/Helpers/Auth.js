export class Auth {
  isLogin = () => {
    return localStorage.getItem("accessToken") ? true : false;
  };

  user = () => {
    //lát nữa viết
    return {
      name: "Hoàng An",
    };
  };

  logout = () => {
    localStorage.removeItem("accessToken");
  };
}
