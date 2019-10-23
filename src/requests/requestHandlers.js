const handlers = {
  routes:  {
    login: 'http://localhost:3000/api/v1/login',
    signup: 'http://localhost:3000/api/v1/signup',
  },
  noTokenPost: function(route, payload) {
    return fetch(route, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    });
  },
  loginViaEmail: function(payload) {
    return this.noTokenPost(this.routes.login, payload)
  },
  signupUser: function(payload) {
    return this.noTokenPost(this.routes.signup, payload)
  },
  loginViaToken: function(token) {
    return fetch(this.routes.login, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
  }
};

export default handlers