import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { withRouter } from "../../Services/Helpers/withRouter";
import { httpClient } from "../../Services/Helpers/httpClient";
import Error404 from "../../Errors/Error404";
import moment from "moment";

const client = httpClient();
export class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "none",
      post: {},
    };
  }

  componentDidMount = () => {
    const { id } = this.props.params;
    this.getPostDetail(id);
  };

  render() {
    const { status, post } = this.state;
    console.log(status, post);

    return (
      <div className="post-detail">
        <div className="container">
          {status !== "none" &&
            (status === "error" ? (
              <Error404 />
            ) : (
              <>
                <h1>{post.title}</h1>
                <div className="post-meta">
                  <ul className="list-unstyled d-flex gap-2">
                    <li>
                      Đăng lúc:{" "}
                      {moment(post.created_at).format("DD/MM/YYYY, H:mm:ss")}
                    </li>
                    <li>
                      Bởi: <a href="#">{post.user.name}</a>
                    </li>
                  </ul>
                </div>
                <div className="py-3">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </>
            ))}
        </div>
      </div>
    );
  }

  getPostDetail = async (id) => {
    //Call api trong này
    const { res, data: post } = await client.get(`/posts/${id}`);
    if (res.ok) {
      this.setState({
        post: post,
        status: "success",
      });
    } else {
      this.setState({
        status: "error",
      });
    }
  };
}

export default withRouter(PostDetail);

/*
Sử dụng markdown Editor
*/
