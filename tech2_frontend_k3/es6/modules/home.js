export const user = {
  name: "Hoàng An",
  age: 30,
};

export const products = {
  name: "SP 1",
};

function getMessage() {
  return "Unicode Academy";
}

//export default user; //export mặc định
export default getMessage;

//Export named
//export { user, products };
/*
Lưu ý:
- Trong 1 file js chỉ có 1 export mặc định
- Ngoài việc export mặc định ở cuối file, chúng ta có thể export trực tiếp với: function và class
- Trong 1 file sẽ có nhiều export theo named
*/
