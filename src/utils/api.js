const api = "http://localhost:5001";

let token = localStorage.token;
if (! token) {
  localStorage.token = Math.random().toString(36).substr(-8);
  token = localStorage.token;
}

const header = {
  'Accept': 'application/json',
  'Authorization': token
};

