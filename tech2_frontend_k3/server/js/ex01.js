var callApi = function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var data = '{"name": "Hoàng An", "email": "contact@unicode.vn"}';
      var response = {
        json: function () {
          return JSON.parse(data);
        },
      };
      resolve(response); //khi hàm này được gọi => state update thành fulfilled
    }, 1000);
    //reject("Error");
  });

  return promise;
};

// callApi().then(
//   function (data) {
//     console.log(data);
//     console.log("Step 02");
//   },
//   function (err) {
//     console.log(err);
//   }
// );

// var users = callApi()
//   .then(function (response) {
//     return response + " - 01";
//   })
//   .then(function (response) {
//     return response + " - 02";
//   })
//   .then(function (response) {
//     console.log(response);
//   });

//Promise Chaining

callApi().then(function (response) {
  //console.log(response.json());
  return response.json(); //tự động chuyển json => object, array
});

/*
Callback => ES5
Promise => ES6
Async Await => ES7

Các trạng thái của promise
- pending
- fulfilled
- rejected
*/
