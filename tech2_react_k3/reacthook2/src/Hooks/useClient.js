import React from "react";

const useClient = (serverApi) => {
  return {
    callApi: async function (endpoint, method = "GET", body = null) {
      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (body !== null) {
        options.body = JSON.stringify(body);
      }

      const res = await fetch(serverApi + endpoint, options);
      const data = await res.json();
      return [data, res];
    },
    get: function (url) {
      return this.callApi(url, "GET");
    },
    post: function (url, body) {
      return this.callApi(url, "POST", body);
    },
  };
};

export default useClient;

/*
const client = useClient('api_server');

client.get('url').then(res => {
  console.log(res);
});
*/
