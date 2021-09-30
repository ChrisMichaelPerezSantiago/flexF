const { axios } = require("./common");

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

const flexF =
  (lookUp = axios) =>
  ({ method = "get", url = null }) =>
    lookUp[axiosMethods[method]](url) || null;

const responseLookup =
  (lookUp) =>
  (expression = { ...responseSchema }) =>
    lookUp[expression] || null;

module.exports = {
  responseLookup,
  flexF,
};
