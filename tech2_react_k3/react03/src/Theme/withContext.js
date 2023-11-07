import { ThemeContext } from "./Main";
export const withContext = (Component) => (props) => {
  return (
    <ThemeContext.Consumer>
      {(context) => <Component {...context} />}
    </ThemeContext.Consumer>
  );
};
