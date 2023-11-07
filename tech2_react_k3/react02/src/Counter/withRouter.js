import { useParams } from "react-router-dom";
export const withRouter = (ParentComponent) => (props) => {
  const params = useParams();
  //Hook (Function đặc biệt, chỉ được sử dụng trong Functional Component)
  return <ParentComponent {...props} params={params} />;
};
