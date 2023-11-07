var users = {
  name: "Hoàng An",
  age: 30,
};

//var customes = users;

//1. Dùng Spread
// var customes = { ...users };

//2. Dùng Json
// var userJson = JSON.stringify(users); //Chuyển object => json
// var customes = JSON.parse(userJson); //Chuyên json thành object

//3. Dùng Object.assign
var customes = Object.assign({}, users);

// customes.name = "Hoàng An Unicode";
// console.log(users);

var a = {
  name: "Hoàng An",
  age: 30,
  address: {
    city: "Hoàng An",
  },
};

//Chuyển object => json
var aJson = JSON.stringify(a);
console.log(aJson);

//Chuyên json thành object
var a = JSON.parse(aJson);
console.log(a);

/**
 * Mỗi ngôn ngữ lập trình sẽ có những cách chuyển đổi khác nhau
 * Áp dụng khi xây dựng và làm việc api
 */
