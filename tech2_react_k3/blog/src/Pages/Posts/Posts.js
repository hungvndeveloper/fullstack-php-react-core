import React, { Component } from "react";
import PostItem from "../../Components/PostItem/PostItem";
import { withContext } from "../../Services/Context/withContext";
import { withRouter } from "../../Services/Helpers/withRouter";
import { httpClient } from "../../Services/Helpers/httpClient";
import Error404 from "../../Errors/Error404";
import LoadMore from "../../Components/LoadMore/LoadMore";
import config from "../../Configs/Config.json";
const { POST_LIMIT } = config;

const client = httpClient();

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "none",
      category: {},
    };
    this.id = this.props.params.id;
    this.dispatch = this.props.dispatch;

    this.limitLoadMore = POST_LIMIT;
  }

  componentDidMount = () => {
    const { getPosts } = this.props.dispatch;
    getPosts(this.id, "id", "desc", null, POST_LIMIT);

    this.getCategory();
  };

  handleLoadMore = async () => {
    this.limitLoadMore += POST_LIMIT;
    const { getPosts } = this.props.dispatch;
    getPosts(this.id, "id", "desc", null, this.limitLoadMore);
  };

  render() {
    const { isLoading, postList, postCount } = this.props.data.posts;
    const { status, category } = this.state;
    const { name: categoryName } = category;
    console.log(status);
    return (
      <section className="posts">
        <div className="container">
          {status !== "none" &&
            (status === "error" ? (
              <Error404 />
            ) : (
              <>
                <h1>{categoryName}</h1>
                <hr />
                <div className="posts-list">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <>
                      {postList.length ? (
                        <div className="row">
                          {postList.map((post) => (
                            <PostItem key={post.id} {...post} />
                          ))}
                        </div>
                      ) : (
                        <div className="alert alert-danger text-center">
                          Không có bài viết
                        </div>
                      )}

                      <LoadMore
                        onLoadMore={this.handleLoadMore}
                        postCount={postCount}
                        postLoaded={this.limitLoadMore}
                      />
                    </>
                  )}
                </div>
              </>
            ))}
        </div>
      </section>
    );
  }

  getCategory = async () => {
    const response = await client.get("/categories/" + this.id);

    if (response.res.ok) {
      const category = response.data;
      this.setState({
        category: category,
        status: "success",
      });
    } else {
      this.setState({
        status: "error",
      });
    }
  };
}

export default withRouter(withContext(Posts));

/**
 * Chuyên mục tồn tại => Không có bài viết
 * Chuyên mục không tồn tại
 *
 *
 */
