import {removeWindowClass} from '../utils/helpers';
//import {Gatekeeper} from 'gatekeeper-client-sdk';

export const loginByAuth = async (email, password) => {
  //const token = await Gatekeeper.loginByAuth(email, password);
  const token ="email: "+email+" password: "+password
  localStorage.setItem('token', token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return token;
};

export const registerByAuth = async (email, password) => {
  //const token = await Gatekeeper.registerByAuth(email, password);
  const token ="token-escrito"
  localStorage.setItem('token', token);
  removeWindowClass('register-page');
  removeWindowClass('hold-transition');
  return token;
};

export const loginByGoogle = async () => {
  //const token = await Gatekeeper.loginByGoogle();
  const token ="token-escrito"
  localStorage.setItem('token', token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return token;
};

export const registerByGoogle = async () => {
  //const token = await Gatekeeper.registerByGoogle();
  const token ="token-escrito"
  localStorage.setItem('token', token);
  removeWindowClass('register-page');
  removeWindowClass('hold-transition');
  return token;
};

export const loginByFacebook = async () => {
  //const token = await Gatekeeper.loginByFacebook();
  const token ="token-escrito"
  localStorage.setItem('token', token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return token;
};

export const registerByFacebook = async () => {
  //const token = await Gatekeeper.registerByFacebook();
  const token ="token-escrito"
  localStorage.setItem('token', token);
  removeWindowClass('register-page');
  removeWindowClass('hold-transition');
  return token;
};
