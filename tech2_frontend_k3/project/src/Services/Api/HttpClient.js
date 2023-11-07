export default class HttpClient {
  constructor(serverApi = null) {
    if (serverApi == null) {
      const { SERVER_API } = process.env;

      this.serverApi = SERVER_API;
    } else {
      this.serverApi = serverApi;
    }
  }

  call = async (url, method = "GET", body = null) => {
    url = `${this.serverApi}${url}`;
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);

    const data = await res.json();

    return { res, data };
  };

  get = (url) => {
    return this.call(url, "GET");
  };

  post = (url, body) => {
    return this.call(url, "POST", body);
  };

  put = (url, body) => {
    return this.call(url, "PUT", body);
  };

  patch = (url, body) => {
    return this.call(url, "PATCH", body);
  };

  delete = (url) => {
    return this.call(url, "DELETE");
  };
}
