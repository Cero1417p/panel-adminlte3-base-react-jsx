import { createSlice } from '@reduxjs/toolkit';
import { types } from './../../types/types'
/*export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  currentUser: any;
}*/
const initialState = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  currentUser: {
    email: 'email@example.com',
    picture: null
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginUser:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        token: action.payload.token,
        currentUser: action.payload.currentUser
      }

    case types.logoutUser:
      return {
        ...state,
        currentUser: {},
        isLoggedIn: false,
        token: null
      }
    case types.loadUser:
      return {
        ...state,
        currentUser: action.payload.currentUser
      }

    default:
      return state;
  }
}

export const loginUser = (token) => ({
  type: types.loginUser,
  payload: {
    isLoggedIn: true,
    token: token,
    currentUser: {
      name: "MERLIN",
      apellido: "REGALADO"
    }

  }
})

export const logoutUser = () => {
  localStorage.removeItem('token');
  return {
    type: types.logoutUser
  }
}

export const loadUser = (user) => ({
  type: types.loadUser,
  payload: {
    currentUser: user
  }
})