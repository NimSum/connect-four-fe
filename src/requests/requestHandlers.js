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
  }
};

export default handlers