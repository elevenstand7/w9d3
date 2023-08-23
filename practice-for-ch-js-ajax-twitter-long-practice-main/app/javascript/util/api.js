const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    Accept: application/json,
    "X-CSRF-Token": "csrfToken",
    ...options.headers
  };
  let response = fetch(url, options);
  return await response.json();
}

const followUser = id => {
  return customFetch(`/users/${id}/follow`,{
    method: 'POST'
  })
};


const unfollowUser = id => {
  return customFetch(`/users/${id}/follow`,{
    method: 'DELETE'
  })
};
