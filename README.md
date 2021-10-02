# ⚡ FlexF

> Axios flex fetch

<a href="https://nodei.co/npm/flexf/"><img src="https://nodei.co/npm/flexf.png"></a>

Proof Of Concept: Project/Library in initial state.

## Response Lookup

_Axios response reference_

```json
  "data": {},
  "status": null
  "statusText": null,
  "headers": {},
  "config": {},
  "request": {}
```

```js
const axios = require("axios").default;
const { flexF, responseLookup } = require("flexF");

const response = responseLookup(
  flexF(axios)({
    /* config */
  })
);
const result = response("data"); // response reference
```

## Shorthand methods for Axios HTTP requests

Axios also provides a set of shorthand methods for performing different types of requests. The methods are as follows:

- [x] **request**
- [x] **get**
- [x] **delete**
- [x] **head**
- [x] **options**
- [x] **post**
- [x] **put**
- [x] **patch**

## Request Config: requestConfig

[Follow The Request Config documentation provided by axios.](https://github.com/axios/axios/blob/master/README.md)

---

## Request example

```javascript
const axios = require("axios").default;
const { flexF, responseLookup } = require("flexF");

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

const result = r("data");
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris Michael*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2021 [flexF](https://github.com/ChrisMichaelPerezSantiago/flexF).
