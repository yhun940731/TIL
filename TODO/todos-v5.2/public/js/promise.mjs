// 정보 은닉
const request = (() => {
  const req = async (method, url, payload) => {
    const response = await fetch(url, {
      method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
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
