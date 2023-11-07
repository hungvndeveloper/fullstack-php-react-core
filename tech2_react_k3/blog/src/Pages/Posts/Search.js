import React, { Component } from "react";
import { withRouter } from "../../Services/Helpers/withRouter";
import { withContext } from "../../Services/Context/withContext";
import LoadMore from "../../Components/LoadMore/LoadMore";
import PostItem from "../../Components/PostItem/PostItem";
import config from "../../Configs/Config.json";
const { POST_LIMIT } = config;
export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
    this.limitLoadMore = POST_LIMIT;
  }

  componentDidMount = () => {
    this.setKeyword();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.location.search !== prevProps.location.search) {
      this.setKeyword();
      //this.getSearch();
    }
  };

  setKeyword = () => {
    const [search] = this.props.search;

    const keyword = search.get("keyword");

    this.setState({
      keyword: keyword,
    });

    this.getSearch(keyword);
  };

  getSearch = (keyword) => {
    const { getPosts } = this.props.dispatch;
    getPosts(0, "id", "desc", keyword, POST_LIMIT);
  };

  handleLoadMore = async () => {
    this.limitLoadMore += POST_LIMIT;
    const { getPosts } = this.props.dispatch;
    const { keyword } = this.state;

    getPosts(0, "id", "desc", keyword, this.limitLoadMore);
  };

  render() {
    const { keyword } = this.state;
    const { isLoading, postList, postCount } = this.props.data.posts;
    //console.log(postList);

    return (
      <section className="posts">
        <div className="container">
          <h1>Tìm kiếm: "{keyword}"</h1>
          <p>Tìm được ({postCount}) kết quả</p>
          <hr />
          <div className="posts-list">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="row">
                  {postList.map((post) => (
                    <PostItem key={post.id} {...post} />
                  ))}
                </div>

                <LoadMore
                  onLoadMore={this.handleLoadMore}
                  postCount={postCount}
                  postLoaded={this.limitLoadMore}
                />
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default withContext(withRouter(Search));
