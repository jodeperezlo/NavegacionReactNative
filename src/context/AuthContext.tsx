import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (icon: string) => void;
  logout: () => void;
  changeUsername: (username: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({
      type: 'SIGN_IN',
    });
  };

  const changeFavoriteIcon = (icon: string) => {
    dispatch({
      type: 'CHANGE_FAVORITE_ICON',
      payload: icon,
    });
  };

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  const changeUsername = (username: string) => {
    dispatch({
      type: 'CHANGE_USERNAME',
      payload: username,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
