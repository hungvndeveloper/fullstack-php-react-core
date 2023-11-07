import logo from "./logo.svg";
import "./App.css";
import Main from "./Theme/Main";
import { withContext } from "./StateProvider/withContext";

function App(props) {
  // return <Main />;
  const { data, dispatch } = props;
  dispatch.addTodo("Công việc 1");
  return <p>Tech2</p>;
}

export default withContext(App);
