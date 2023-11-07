React JS (Library)

- Thư viện Javascript xây dựng UI
- Xây dựng theo cơ chế Client Side (Sử dụng Javascript để build giao diện)

Khi học 1 framework javascript => Nên học theo 2 cơ chế

- Client Side: React Js
- Server Side: Next Js

Component: Thành phần

Modules: Chức năng

=> 1 modules sẽ có nhiều component

Trong React JS => Nếu function hoặc class được viết hoa chữ cái đầu => Gọi là component

Cách gọi Component: <Tenfunction /> hoặc <Tenfunction></Tenfunction>

Các Extension cần thiết

- Prettier => Format
- ES7+ React/Redux/React-Native snippets
- JS JSX Snippets

Event trong React JSX

Cần gọi 1 Event Handler có tham số

- Tạo ra 1 hàm không tham số để gọi 1 hàm có tham số
- Arrow Function trong Event JSX

Lưu ý khi làm việc với JSX

- JSX chỉ có duy nhất 1 thẻ bọc
- Nếu muốn có các thẻ ngang hàng => Bọc ra ngoài 1 thẻ html nào đó (Thường là thẻ div)
- Nếu không muốn xuất hiện thẻ bọc ở bên ngoài => Cần dùng React.Fragments

Các phím tắt khi tạo Component

- Tạo Functional Component => Component tạo bởi Function => rfc
- Tạo Class Component => Component tạo bởi class => rce

Toán tử sẽ sử dụng trong jsx

- toán tử 3 ngôi
- toán tử ??
- toán tử &&

Để hiển thị 1 danh sách lên jsx

- Chuyển thành dạng mảng
- Mỗi phần tử mảng sẽ là jsx

Props

- Tồn tại trong component và jsx
- Props giống như 1 thuộc tính của thẻ html
- Nhận props trong components => Nhận qua tham số của hàm (object)
- Props dùng để truyền dữ liệu từ component cha xuống component con
- Component không được phép cập nhật lại giá trị của Props

Render Props

- Đồng bộ dữ liệu giữa các component ngang hàng với nhau
- Two-way data binding

Children Props

- Props đặc biệt có tên `children`
- Thể hiện nội dung của 1 components: <Component>Nội dung</Component>

Functional Component và Class Component

- Học cả 2
- Lý do: Vừa giúp ích cho công việc, vừa hiểu rõ hơn về các thành phần của React: state, Lifecycle,...

State (Data)

- Quản lý dữ liệu trong 1 component
- Trong Class Component => Có sẵn thuộc tính `this.state`
- Khi State thay đổi => Component tự động re-render
- Để cập nhật State => Sử dụng phương thức `this.setState()`
- Tuyệt đối không được thay đổi trực tiếp thuộc tính `this.state` (Gây ra lỗi)
- Hàm `this.setState()` là 1 hàm bất đồng bộ, tuy nhiên giá trị State sẽ không thay đổi luôn ngay sau khi hàm setState được gọi

Xử lý Form

- Tạo state lưu trữ dữ liệu các input
- Lấy giá trị các ô input và lưu state (Sự kiện onChange)
- Xử lý submit form

Thực hành: Xây dựng TodoList App

- Mục tiêu

* Thành thạo về việc phân tích và cập nhật State
* Phân chia các component
* Sử dụng Render Props để share state

* Có 3 component:

- Todos: Component chính
- ShowTodos: Component hiển thị danh sách các công việc
- AddTodo: Component hiển thị form thêm công việc

* Phân tích data:

- Khi dữ liệu được add vào component `AddTodo` => Dữ liệu sẽ được cập nhật vào State chung
- State chung sẽ cần render ra component `ShowTodos`

Buổi sau:

- Lifcycle Component (vòng đời component)
- Call Api trong react

Tổng kết:

- Nắm kỹ vòng đời component
- Call api: Quy trình call api, vị trí gọi

Buổi sau:

- Refs (Sử dụng DOM trong React JS)
- forwardRef
- Higher Order Components
- React.memo

## Refs

- Sử dụng để thao tác DOM thật
- Khởi tạo refs: React.createRef()
- Tham chiếu ref vào element: Sử dụng thông qua props ref
- Sử dụng: tendoituongRef.current => Trả về 1 Node Dom

## forwardRef

- Khi làm việc với Ref => Chỉ tham chiếu trực tiếp tới Element thông qua prop ref
- Muốn tham chiếu tới element thông qua Component => Bọc component vào trong 1 component forwardRef (Higher Order Components)

## Higher Order Components

- Higher Order Components là 1 component được bọc 1 component khác
- HOC nhận vào 1 component và return ra chính component đó
- Sử dụng HOC để kế thừa logic và giải quyết các bài toán phức tạp trong Class Component

## Làm việc với Higher Order Component: React.memo

- Ngăn không cho component con re-render khi không có sự thay đổi về props
- Nếu props thay đổi => memo sẽ không chặn re-render

Buổi sau:

- Context API
- Thực hành build StateProvider => Quản lý Global State

## Context API

- Truyền dữ liệu từ component cha xuống các component mà không cần truyền qua props
- Cấu tạo Context

* createContext() => Khởi tạo từ component cha
* Provider => Khởi tạo từ component cha, gửi dữ liệu
* Comsumer => Nhận dữ liệu ở component con

Giải pháp nhận dữ liệu Context

- Class Component => Viết Higher Order Component
- Function Component => Sử dụng Hook useContext

Buổi sau:

React Router Dom => Tạo Url cho 1 project React JS

- Có 2 loại Route

* Public Route => Bất kì ai cũng có thể truy cập vào được
* Protected Route => Route sẽ được bảo vệ bởi 1 component (Điều kiện logic: đăng nhập)

Nested Route

- Các Route được gom nhóm lại với nhau
- Ví dụ:
  /auth/login
  /auth/logout
  /auth/register
- Các Route được gom nhóm không giới hạn

/admin/products
/admin/products/add
/admin/products/edit
/admin/products/delete

=> Nhóm admin và nhóm products

Protected Routes

- Bảo vệ bởi 1 component
- Tìm hiểu 2 Component: Navigate và Outlet

Route => Component

Page not found => path = `*`

Dynamic route => Thêm tham số vào url => useParams

Search Params => useSearchParams => Xem lại UrlSearchParams bên Javascript

useLocation => Xem lại window.location

## React Hook

- Code React bằng class component (extends từ React.Component)
- Functional Component => Không thể sử dụng được các thành phần: state, licycle component,...
- Hook: Cho phép sử dụng các thành phần bên trong React Component: state, licycle component,...

- Hook nó là function đặc biệt

* Bắt đầu từ khóa use
* Chỉ được gọi trong functional component
* Chỉ được gọi tại vị trí top level trong function component

- Hook là 1 món quà mà React mang lại cho lập trình viên: Code ngắn gọn hơn, làm được nhiều việc hơn

- Hook cho phép lập trình viên tự tạo ra Hook riêng

Ví dụ:
`const Home = () => {
  //Call Hook
  const handleABC = () => {
    //Can't call Hook
  }
}`

Những hook sẽ học trong React JS

- useState() => Quản lý các state trong React
- useEffect() => Mô phỏng lại vòng đời component (Lifecycle Component)
- useContext() => Lấy dữ liệu từ context
- useRef() => Tạo và làm việc với Ref
- useId() => Tự động tạo id cho thuộc tính html
- useImperativeHandle() => Quản lý ref
- useLayoutEffect() => Giống Effect, chỉ thay đổi giữa thứ tự chạy callback và update UI
- useCallback() => Xử lý tối ưu hiệu năng với callback (function)
- useMemo() => Xử lý tối ưu hiệu năng với logic (Không nhầm lẫn với React.memo)
- useTransition()
- useDeferredValue()
  => Liên quan đến hiệu năng, trải nghiệm

- useReducer => Làm việc với State nâng cao (Làm việc thông qua Reducer)

- State Global = Context API + useReducer

- Custom Hooks

## Redux

- Redux Core => hiểu các thành phần của Redux
- Redux Toolkit => Sử dụng chính khi đi làm
- Redux Thunk (Middleware) => Thường dùng để call api

### Vấn đề

- State chỉ hoạt động trong nội bộ componnent
- Chia sẻ state tới các component khác:

* Render Props
* Context
* Thư viện ngoài: Redux

### Redux là gì?

- Không phải sinh ra để dành cho React
- Sử dụng để quản lý Global State (State Container)

Ưu điểm:

- Phổ biến
- Hỗ trợ mọi thứ

Nhược điểm:

- Với dự án nhỏ => Nặng
- Khó học

### Cách học Redux

- Redux Core: Khó setup, hiểu rõ cách hoạt động của Redux
- Redux Tookit: ưGiống nh 1 bản đóng gói (Kiểu như Create React App), Setup nhanh, khó hiểu => Áp dụng vào dự án thực tế
- Redux Middleware: Thunk, Saga => Thường được sử dụng để call api, logger,...

### Các thành phần của Redux

- Store => Kho lưu trữ chung
- Reducer

* Nó là 1 function
* Dùng để viết các logic update state

Lưu ý: Nên chia nhỏ Reducer tương ứng với các module

- Dispatch: Đẩy hành động + data lên Reducer (Sử dụng thông qua hook useDispatch)

- Action:

* Là 1 object
* Sử dụng để dispatch lên Reducer (Tham số của Dispatch)

- Selector: Dùng để đọc dữ liệu từ Redux xuống Component (Sử dụng thông qua hook useSelector)

- Action Creator: Hàm để tạo 1 action

Cách tách Reducer trong Redux

- Tạo Reducer theo tên module: counterReducer, todoReducer, productReducer,...

- Nối các Reducer lại thành 1 reducer có tên rootReducer để đưa vào createStore (Sử dụng hàm combineReducers để nối)

### Redux Thunk

UI (Component) => Dispatch => Middleware (Call api,...) => Dispatch => Reducer

Redux Thunk thực chất là 1 function, trong function đó sẽ return về 1 function khác (Closure)

const fetchTodos = () => {
return (dispatch, getState) => {
//dispatch => Dùng để dispatch tới Reducer
//getState => Dùng để lấy tất cả state trên store
}
}

Buổi sau: Hướng dẫn Redux Tookit + Redux Thunk trong Redux Tookit
=> Tìm hiểu hàm createAsyncThunk()

Về nhà: xây dựng todos list sử dụng api + redux core + redux thunk

### Redux Toolkit

1. slice

- Tương ứng 1 module
- Bao gồm: Reducer, Action, Action Creator,...

2. selector

3. middleware

Hàm createAsyncThunk()
