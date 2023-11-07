import config from "../../Configs/Config.json";
const { SERVER_API } = config;

export const httpClient = (serverApi = SERVER_API) => {
  const client = {
    callApi: async function (
      url,
      method,
      params = {},
      body = {},
      token = null
    ) {
      url = serverApi + url;

      if (Object.keys(params).length) {
        url = url + "?" + new URLSearchParams(params).toString();
        //category_id=1&q=abc
      }

      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      //Nếu có body
      if (Object.keys(body).length) {
        options.body = JSON.stringify(body);
      }

      const res = await fetch(url, options);

      const data = await res.json();

      return {
        res,
        data,
      };
    },

    get: function (url, params = {}, token = null) {
      return this.callApi(url, "GET", params, {}, token);
    },

    post: function (url, body, params = {}, token = null) {
      return this.callApi(url, "POST", params, body, token);
    },

    put: function (url, body, params = {}, token = null) {
      return this.callApi(url, "PUT", params, body, token);
    },

    patch: function (url, body, params = {}, token = null) {
      return this.callApi(url, "PATCH", params, body, token);
    },

    delete: function (url, params = {}, token = null) {
      return this.callApi(url, "DELETE", params, {}, token);
    },
  };

  return client;
};

// const client = htptClient();
// client.get(``)
// client.post(``);
