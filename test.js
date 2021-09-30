const { axios } = require("./src/common");

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

const main = async () => {
  const flexF =
    (lookUp = axios) =>
    ({ method = "get", url = null }) =>
      lookUp[axiosMethods[method]](url) || null;

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
      url: "https://jsonplaceholder.typicode.com/todos",
    })
  );

  const result = r("data");
  console.log(result);
};

main();
