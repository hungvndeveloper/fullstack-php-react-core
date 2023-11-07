import Headers from "./Components/Headers/Headers";
import Footers from "./Components/Footers/Footers";
import { publicRoutes } from "./Routes/publicRoutes";
import { protectedRoutes } from "./Routes/protectedRoutes";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/Styles/Styles.scss";
import Error404 from "./Errors/Error404";
function App() {
  return (
    <>
      <Headers />
      <Routes>
        {publicRoutes}
        {protectedRoutes}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footers />
    </>
  );
}

export default App;
