import "./Home.scss";
import Navigo from "navigo";
import Component from "../../Core/Component";
import HttpClient from "../../Services/Api/HttpClient";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isLoading: true,
    };
    this.client = new HttpClient();
    //this.getPosts();
  }

  getPosts = async () => {
    const { res, data } = await this.client.get("/posts");
    if (res.ok) {
      this.setState({
        posts: data,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    //console.log("component did mount");
    this.getPosts();
  }

  render() {
    const { posts, isLoading } = this.state;
    console.log("re-render");
    return this.html`
    <h1>HomePage</h1>
    ${
      isLoading
        ? `<p>Loading...</p>`
        : posts.map(
            ({ title, body }) => `<div>
    <h3>${title}</h3>
    <p>${body}</p>
    </div?`
          )
    }
    `;
  }
}
