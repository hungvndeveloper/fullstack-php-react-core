import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/Todos/Todos";

console.log(process.env);

console.log(process.env.REACT_APP_API_SERVER);

function App() {
  return (
    <div>
      <h1>Khóa học React JS</h1>
      <img src={process.env.PUBLIC_URL + "/logo512.png"} />
    </div>
  );
}

export default App;
