const { axios } = require("./common");

const axiosMethods = {
  request: "request",
  get: "get",
  delete: "delete",
  head: "head",
  options: "options",
  post: "post",
  put: "put",
  patch: "patch",
};

const responseSchema = {
  data: {},
  status: null,
  statusText: null,
  headers: {},
  config: {},
  request: {},
};

const flexF =
  (lookUp = axios) =>
  ({
    method = "get",
    url = null,
    requestConfig = { ...require("./RequestConfig") },
  }) =>
    lookUp[axiosMethods[method]](url, {
      ...requestConfig,
    }) || null;

const responseLookup =
  (lookUp) =>
  (expression = { ...responseSchema }) =>
    lookUp[expression] || null;

module.exports = {
  responseLookup,
  flexF,
};
