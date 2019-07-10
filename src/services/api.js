/* eslint-disable import/prefer-default-export */
export function getData(url) {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.FOB_SERVER_TOKEN,
    },
  })
    .then(response => response.json())
    .then(response => response.data)
    .catch((error) => {
      throw error;
    });
}

export function sendLogin(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      strategy: 'local',
      email: data.email,
      password: data.pwd,
    }),
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}
