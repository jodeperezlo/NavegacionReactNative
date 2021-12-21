import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'SIGN_IN'}
  | {type: 'CHANGE_FAVORITE_ICON'; payload: string}
  | {type: 'LOGOUT'}
  | {type: 'CHANGE_USERNAME'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'CHANGE_FAVORITE_ICON':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
