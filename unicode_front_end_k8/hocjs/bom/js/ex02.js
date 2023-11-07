//window.location => Làm việc với url

console.log(window.location);

const host = window.location.host;
const hostname = window.location.hostname;
const pathname = window.location.pathname;
const port = window.location.port;
const fullUrl = window.location.href;
const search = window.location.search;
const hash = window.location.hash;

console.log(host);
console.log(hostname);
console.log(pathname);
console.log(port);
console.log(fullUrl);
console.log(search);
console.log(hash);

//Phương thức reload()

const reload = document.querySelector(".reload");
reload.addEventListener("click", () => {
  window.location.reload();
});

/*
Nếu muốn cập nhật các thông tin trên url: 
- Gán các thông tin bằng giá trị mới

window.location.hash = 'san-pham'
*/

const product = document.querySelector(".product");
product.addEventListener("click", () => {
  //   window.location.hash = "san-pham";
  //   window.location.search = "?keyword=abc&id=123";
  window.location.href = "https://google.com";
});

/*
Làm việc với search params
*/

console.log(window.location.search);

const searchParams = new URLSearchParams(window.location.search);
const category = searchParams.get("category");
console.log(category);
const params = searchParams.getAll("id");
console.log(params);
