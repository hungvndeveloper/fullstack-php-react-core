import { StateContext } from "./StateProvider";
export const withContext = (Component) => (props) => {
  return (
    <StateContext.Consumer>
      {(context) => <Component {...context} {...props} />}
    </StateContext.Consumer>
  );
};
