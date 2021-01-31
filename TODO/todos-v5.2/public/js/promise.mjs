// 정보 은닉
const request = (() => {
  const req = (method, url, payload) => {
    return fetch(url, {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    })
  };

  return {
    get(url) {
      return req('GET', url);
    },
    post(url, payload) {
      return req('POST', url, payload);
    },
    patch(url, payload) {
      return req('PATCH', url, payload);
    },
    delete(url) {
      return req('DELETE', url);
    },
  };
})();

// ajax를 외부로 공개한다.
export default request;

// // 정보 은닉
// const ajax = (() => {
//   const req = (method, url, payload) => {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();

//       xhr.open(method, url);
//       xhr.setRequestHeader('content-type', 'application/json');
//       xhr.send(JSON.stringify(payload));

//       xhr.onload = () => {
//         if (xhr.status === 200 || xhr.status === 201) {
//           resolve(JSON.parse(xhr.response));
//         } else {
//           reject(new Error(xhr.status));
//         }
//       };
//     })
//   };

//   return {
//     get(url) {
//       return req('GET', url);
//     },
//     post(url, payload) {
//       return req('POST', url, payload);
//     },
//     patch(url, payload) {
//       return req('PATCH', url, payload);
//     },
//     delete(url) {
//       return req('DELETE', url);
//     },
//   };
// })();

// // ajax를 외부로 공개한다.
// export default ajax;
