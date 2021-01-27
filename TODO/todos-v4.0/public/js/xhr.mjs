// 정보 은닉
const ajax = (() => {
  const req = (method, url, callback, payload) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        callback(JSON.parse(xhr.response));
      } else {
        console.error(xhr.status);
      }
    };
  };

  return {
    get(url, callback) {
      req('GET', url, callback);
    },
    post(url, payload, callback) {
      req('POST', url, callback, payload);
    },
    patch(url, payload, callback) {
      req('PATCH', url, callback, payload);
    },
    delete(url, callback) {
      req('DELETE', url, callback);
    },
  };
})();

// ajax를 외부로 공개한다.
export default ajax;

// 객체 활용
// const ajax = {
//   load(xhr) {
//     xhr.onload = () => {
//       if (xhr.status === 200 || xhr.status === 201) {
//         console.log(JSON.parse(xhr.response));
//       } else {
//         console.error(xhr.status);
//       }
//     };
//   },

//   get(url) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);
//     // xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send();
//     this.load(xhr);
//   },

//   post(url, payload) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('POST', url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send(JSON.stringify(payload));

//     this.load(xhr);
//   },

//   patch(url, payload) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('PATCH', url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send(JSON.stringify(payload));

//     this.load(xhr);
//   },

//   remove(url) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('DELETE', url);
//     // xhr.setRequestHeader('content-type', 'application/json');
//     xhr.send();

//     this.load(xhr);
//   }
// };

// ajax.get('/todos');

// 각각 함수로 생성
// const get = url => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', url);
//   // xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       console.log(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status);
//     }
//   };
// };

// const post = (url, payload) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('POST', url);
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send(JSON.stringify(payload));

//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       console.log(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status);
//     }
//   };
// };

// const patch = (url, payload) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('PATCH', url);
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send(JSON.stringify(payload));

//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       console.log(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status);
//     }
//   };
// };

// const remove = url => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('DELETE', url);
//   // xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       console.log(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status);
//     }
//   };
// };

// get('/todos/2');
// post('/todos', { id: 4, content: 'React', completed: false });
// patch('/todos/4', { completed: true });
// remove('/todos/4');
