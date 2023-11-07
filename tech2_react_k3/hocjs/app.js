/*
Export - Import trong Js Module có 2 loại:
1. Export mặc định: Chỉ có 1 trong 1 file
2. Export theo tên: Có nhiều
*/

// import home from "./modules/home.js";

// const { users, products } = home;

// console.log(users, products);

// import customers, { users, products } from "./modules/home.js";

// //import React, {useState} from "react"

// console.log(users, products, customers);

// import * as home from "./modules/home.js";

// const { default: customers, users, products } = home;

// console.log(users, products, customers);

import { products as product2, users as user2 } from "./modules/home.js";

console.log(product2, user2);
