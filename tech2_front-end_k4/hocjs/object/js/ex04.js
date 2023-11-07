var users = {
  name: "Hoàng An",
  email: "contact@unicode.vn",
};

var customers = Object.assign({}, users); //clone object

//var customers = { ...users }; //spread operator (clone object)

customers.name = "Tạ Hoàng An";

console.log(customers);
console.log(users);

var a = ["Hoàng An", 31];
//var b = [...a]; //spread operator (clone object)
var b = a.map(function (item) {
  return item;
});
b[0] = "Unicode";

console.log(a);
console.log(b);

var title = "Khóa học Front-end";
var content = "Hoàng An unicode";

var posts = {
  title,
  content
};

console.log(posts);
