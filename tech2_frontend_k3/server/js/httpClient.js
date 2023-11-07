var httpClient = function (serverApi) {
  return {
    callApi: function (url, method = "GET", body = null, token = null) {
      url = serverApi + url;
      var headers = {
        "Content-Type": "application/json",
      };

      if (token !== null) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      var options = {
        method: method,
        headers: headers,
      };

      if (body !== null) {
        options.body = JSON.stringify(body);
      }

      return fetch(url, options);
    },

    get: function (url) {
      return this.callApi(url, "GET");
    },

    post: function (url, body) {
      return this.callApi(url, "POST", body);
    },

    put: function (url, body) {
      return this.callApi(url, "PUT", body);
    },

    patch: function (url, body) {
      return this.callApi(url, "PATCH", body);
    },

    delete: function (url) {
      return this.callApi(url, "DELETE");
    },
  };
};
