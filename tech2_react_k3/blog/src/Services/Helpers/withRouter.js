import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export const withRouter = (Component) => (props) => {
  const params = useParams();
  const search = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Component
      params={params}
      {...props}
      search={search}
      location={location}
      navigate={navigate}
    />
  );
};
