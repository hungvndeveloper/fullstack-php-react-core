export const user = {
  name: `Hoàng An`,
  email: `contact@unicode.vn`,
};

export const customer = {
  name: "Tuấn",
  email: "tuan@gmail.com",
};

export const getUser = () => {
  return user;
};

export const getCustomer = () => {
  return customer;
};

// export default function getMessage() {
//   return `Unicode Academy`;
// }

export default class Person {
  constructor() {
    this.name = `Hoàng An`;
  }
}

//export default
//Trong 1 file chỉ có 1 export default
//export default { user };
//export default user;

//export named
//export { getUser, getCustomer };
