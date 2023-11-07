//Biến

//Từ khóa let
var a = 10;
if (a >= 10) {
  let b = 20;
  if (b >= 20) {
    let b = 30;
    console.log(b);
  }
  console.log(b);
}

//Từ khóa const (Hằng số)
// const user = "Hoàng An";
// user = "Hoàng An Unicode";
// console.log(user);

const users = {
  name: "Hoàng An",
  age: 30,
};

// users.name = "Hoàng An Unicode";
users = {};

console.log(users);

//Scope

/*
1. Global Scope

2. Local Scope
2.1. Function Scope: function
2.2. Block Scope: if, for, while,...
*/
