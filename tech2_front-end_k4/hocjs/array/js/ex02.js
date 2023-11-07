console.log(Array.prototype);

//var p = document.getElementsByTagName("p");
//p = Array.from(p);
// p.forEach(function (item) {
//   console.log(item.innerText);
// });

// var numbers = [1, 5, 9, 100, 20];

// console.log(numbers);

// numbers.sort(function (a, b) {
//   //return về số âm

//   var result = b - a;
//   return result;
// });

// console.log(numbers);

var customers = ["Nguyễn Tuấn Anh", "Tạ Hoàng An", "Trần Văn Dũng"];

//Viết hàm lấy tên
var getName = function (fullname) {
  return fullname.split(" ").slice(-1).join("");
};

// customers.sort(function (a, b) {
//   var nameA = getName(a);
//   var nameB = getName(b);

//   if (nameA < nameB) {
//     return -1;
//   }
// });

// console.log(customers);

for (var i = 0; i < customers.length - 1; i++) {
  var namei = getName(customers[i]);
  for (var j = i + 1; j < customers.length; j++) {
    var namej = getName(customers[j]);

    if (namei > namej) {
      var tmp = customers[i];
      customers[i] = customers[j];
      customers[j] = tmp;
    }
  }
}

console.log(customers);
