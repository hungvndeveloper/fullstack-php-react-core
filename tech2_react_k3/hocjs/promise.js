//fetch() => Trả về 1 promise

const callApi = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Response Api");
    }, 2000);

    //reject("Lỗi");
  });
  return promise;
};

/*
Các trạng thái của promise 
- pending
- fulfilled
- reject
*/

// const nextStep = () => {
//   console.log("Next step");
// };

// const getText = async () => {
//   const result = await callApi();
//   console.log(result);
// };

// getText();

//Promise chain
callApi()
  .then((response) => response + " Lần 1")
  .then((response) => response + " Lần 2")
  .then((response) => {
    console.log(response);
  });

/*
fetch(url).then(response => {
    return response.json()
}).then(response => {
    console.log(response)
})
*/
