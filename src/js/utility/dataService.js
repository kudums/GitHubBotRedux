let fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Token 1f42a05c3cd798f49fa4dc56a3124220',
  },
  mode: 'cors',
  cache: 'default',
};

function getJSON(url) {
  fetchOptions.method = 'POST';
  delete fetchOptions.body;
  const dataPromise = fetch(url, fetchOptions);
  return new Promise((resolve, reject) => {
    dataPromise
      .then(res => {
        res.json().then(data => {
          resolve(data);
        });
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default getJSON;
