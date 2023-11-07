import React, { Component } from "react";
import { withRouter } from "../../Services/Helpers/withRouter";
import { Url } from "../../Services/Helpers/Url";

const url = new Url();

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
  }

  componentDidMount = () => {
    const [search] = this.props.search;
    if (search.get("keyword")) {
      this.setState({
        keyword: search.get("keyword"),
      });
    }
  };

  componentDidUpdate = (prevProps) => {
    const { location } = this.props;
    const path = location.pathname;
    if (path !== "/tim-kiem" && path !== prevProps.location.pathname) {
      this.setState({
        keyword: "",
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { keyword } = this.state;

    const { navigate } = this.props;

    if (keyword.length >= 2) {
      navigate(url.getSearch(keyword));
    }
  };

  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Từ khóa tìm kiếm..."
            onChange={this.handleChange}
            value={this.state.keyword}
          />
          <button type="submit" className="btn btn-primary">
            Tìm
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(SearchForm);
