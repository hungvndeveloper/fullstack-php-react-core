# React Hook

- React Hook là các hàm (Đặc biệt) do React định nghĩa sẵn hoặc do lập trình viên tự định nghĩa
- React Hook chỉ sử dụng được trong functional component
- React hook giúp mô phỏng lại các thành phần giống như bên class component (Món qua React tặng)

* Lifecycle Component => React Hook: useEffects()
* State => React Hook: useState()

class Home extends React.Component{

}

function Home(){

}

- React Hook chỉ được gọi ở cấp con đầu tiên trong functional component

function Home(){
//Call react hook
const handleClick = () => {
//không gọi react hook trong này
}
}

React API:

- useState() => Quản lý các State đơn giản
- useEffect() => Làm việc với vòng đời Component
- useContext() => Lấy dữ liệu từ Context
- useReducer() => Quản lý state
- useRef() => Quản lý Ref
- useCallback() => Hiệu năng callback
- useMemo() => hiệu năng: logic
- useImperativeHandle() => Chuyển tiếp ref (an toàn hơn)
- useLayoutEffect() => Giống useEffect, chỉ khác thứ tự thực hiện
- useDeferredValue
- useTransition
  => Hiệu năng
- useId
  => Tạo id tự động để làm việc với Form
- Custom Hook => giống như việc xây dựng 1 component

debouce => Thực hành làm chức năng search autocomplete

assets: css, image,...css module,...

Redux

Project
