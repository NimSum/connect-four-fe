import handler from './requestHandlers';

export default function(type, payload) {
  switch(type) {
    case 'login':
      return handler.loginViaEmail(payload);
    case 'tokenLogin':
      const token = JSON.parse(localStorage.getItem('user_token')) || payload;
      handler.loginViaToken(token);
      break;
    case 'signupUser':
      handler.signupUser(payload);
      break;
    default:
      console.log('def');
  }
}