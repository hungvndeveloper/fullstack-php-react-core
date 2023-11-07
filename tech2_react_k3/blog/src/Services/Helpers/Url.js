export class Url {
  constructor() {
    this.login = "/dang-nhap";
    this.register = "/dang-ky";
  }

  getPost = (id) => {
    return `/chuyen-muc/chi-tiet/${id}`;
  };

  getCategory = (id) => {};

  getSearch = (keyword) => {
    return `/tim-kiem?keyword=${keyword}`;
  };
}
