var customers = ["An", "Đạt", "Tùng"];

// customers.fill("Unicode");

console.log(customers);

// customers.forEach(function (customer, index) {
//   console.log(`${customer} - ${index}`);
// });

// var result = customers.map(function (customer, index) {
//   return `<h3>${customer}</h3>`;
// });

// console.log(result);

var numbers = [5, 10, 9, 7];
//some => Tìm số xem trong mảng có số chẵn hay không?

var check = numbers.some(function (number) {
  if (number % 2 == 0) {
    return true;
  }

  return false;
});

console.log(check);

var numbers = [5, 11, 9, 7];

//every => Tìm số xem trong mảng có tất cả là số lẻ hay không?

var check = numbers.every(function (number) {
  if (number % 2 !== 0) {
    return true;
  }

  return false;
});

console.log(check);

// var customers = ["An", "Đạt", "Tùng"];

// var search = customers.find(function (customer) {
//   if (customer === "Đạt") {
//     return customer;
//   }
// });

// console.log(search);

var numbers = [5, 11, 9, 11, 7];

// var result = numbers.find(function (number) {
//   if (number > 11) {
//     return true;
//   }
// });

// console.log(result);

// var result = numbers.filter(function (number) {
//   if (number !== 11) {
//     return true;
//   }

//   //return false;
// });

// console.log(result);

// var index = numbers.findLastIndex(function (number) {
//   if (number === 11) {
//     return true;
//   }
// });

// console.log(index);

var numbers = [5, 11, 9, 7];

console.log(numbers);

var result = numbers.reduce(function (prevValue, newValue) {
  console.log(prevValue, newValue);
  return newValue;
});
