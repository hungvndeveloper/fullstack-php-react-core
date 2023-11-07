import Home from "../Pages/Home/Home";
import Song from "../Pages/Song/Song";

export const publicRoute = {
  "/": Home,
  "/bai-hat/:id": Song,
};
