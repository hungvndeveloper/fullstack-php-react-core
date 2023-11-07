//Promise => Xử lý bất đồng bộ
const getUsers = () => {
  const promise = new Promise((resolve, reject) => {
    //resolve => Thành công
    //reject => Thất bại
    setTimeout(() => {
      resolve(JSON.stringify(["User 1", "User 2", "User 3"]));
      //reject("Lấy user bị lỗi");
    }, 5000);
  });

  return promise;
};

const showMessage = () => {
  console.log("Thành công");
};

// getUsers()
//   .then((data) => {
//     data.forEach((item) => {
//       console.log(item);
//     });

//     showMessage();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

getUsers()
  .then((response) => JSON.parse(response))
  .then((data) => {
    console.log(data);
  });

//Promise chaining

/*
Các trạng thái của promise:
- pending: Đang chờ trả kết quả
- fulfilled: Trả về kết quả (khi chúng ta gọi .then)
- rejected: Bị lỗi
*/
