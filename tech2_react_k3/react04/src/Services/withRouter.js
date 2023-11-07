import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export const withRouter = (Comment) => (props) => {
  const params = useParams();
  const search = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Comment
      params={params}
      {...props}
      search={search}
      location={location}
      navigate={navigate}
    />
  );
};
