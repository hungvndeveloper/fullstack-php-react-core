import React, { Component } from "react";
import "./Home.scss";

import PostItem from "../../Components/PostItem/PostItem";

import { withContext } from "../../Services/Context/withContext";

import config from "../../Configs/Config.json";
import LoadMore from "../../Components/LoadMore/LoadMore";

const { POST_LIMIT } = config;

export class Home extends Component {
  constructor(props) {
    super(props);

    this.limitLoadMore = POST_LIMIT;

    this.state = {
      limit: POST_LIMIT,
    };
  }

  componentDidMount = () => {
    const { getPosts } = this.props.dispatch;
    getPosts(0, "id", "desc", null, POST_LIMIT);
  };

  handleLoadMore = async () => {
    this.limitLoadMore += POST_LIMIT;
    const { getPosts } = this.props.dispatch;
    getPosts(0, "id", "desc", null, this.limitLoadMore);
    // await this.setState({
    //   limit: this.state.limit + POST_LIMIT,
    // });
    console.log(this.state.limit);
  };

  render() {
    const { isLoading, postList, postCount } = this.props.data.posts;

    return (
      <section className="posts">
        <div className="container">
          <h1>Bài viết mới nhất</h1>
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

export default withContext(Home);
