const { axios, qs } = require("./src/common");

const axiosMethods = {
  get: "get",
  post: "post",
  delete: "delete",
  put: "put",
};

const responseSchema = {
  data: {},
  status: null,
  statusText: null,
  headers: {},
  config: {},
  request: {},
};

const requestConfig = {
  url: null,
  method: "get", //default
  baseURL: null,
  headers: {},
  params: {},
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "brackets" });
  },
};

const main = async () => {
  const flexF =
    (lookUp = axios) =>
    ({
      method = "get",
      url = null,
      requestConfig = { ...require("./src/RequestConfig") },
    }) =>
      lookUp[axiosMethods[method]](url, {
        ...requestConfig,
      }) || null;

  const responseLookup =
    (lookUp) =>
    (expression = { ...responseSchema }) =>
      lookUp[expression] || null;

  /**
   * @description testing custom lookup
   */
  const lookUp = axios;

  const response = responseLookup(
    await lookUp[axiosMethods["get"]](
      `https://jsonplaceholder.typicode.com/todos`
    )
  );

  const r = responseLookup(
    await flexF(axios)({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos/",
      requestConfig: {
        params: {
          id: 1,
        },
        responseType: "json",
      },
    })
  );

  const result = r("config");
  console.log(result);
};

main();
