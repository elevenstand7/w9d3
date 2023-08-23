const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    "Accept": 'application/json',
    "X-CSRFToken": 'csrfToken',
    ...options.headers
  };
  let response = fetch(url, options);
  return await response.json();
}

export function followUser(id){
  return customFetch(`/users/${id}/follow`,{
    method: 'POST'
  })
};


export function unfollowUser(id){
  return customFetch(`/users/${id}/follow`,{
    method: 'DELETE'
  })
};

