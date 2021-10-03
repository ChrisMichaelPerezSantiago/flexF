const Enum = require("../Enum");
const { qs } = require("../common/index");

const responseTypeOpts = Enum({
  arraybuffer: "arraybuffer",
  document: "document",
  json: "json",
  text: "text",
  stream: "stream",
});

const lookupResponseType =
  (lookUp, defaultCase = responseTypeOpts.json) =>
  (expression = { ...responseTypeOpts }) =>
    lookUp[expression] || lookUp[defaultCase];

const requestConfig = {
  url: null,
  method: "get", //default
  baseURL: null,
  headers: {},
  params: {},
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "brackets" });
  },
  data: {},
  data: null,
  timeout: 0,
  withCredentials: false, // default
  auth: {},
  // default 'json', options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  responseType: (responseType) =>
    lookupResponseType(responseType, "json")(responseType),

  maxContentLength: 2000,
  maxBodyLength: 2000,
  maxRedirects: 5, // default
  socketPath: null, // default
  decompress: true, // default
  insecureHTTPParser: undefined, // default
  transitional: {
    silentJSONParsing: true, // default value for the current Axios version
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
  },
};

module.exports = requestConfig;
