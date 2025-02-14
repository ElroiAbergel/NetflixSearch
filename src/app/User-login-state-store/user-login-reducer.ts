import { Action, createReducer, on } from '@ngrx/store';
import { login, logout } from './user-login-actions';
import { UserLogin, initialState } from './user-login-state';

const _userLoginReducer = createReducer(
  initialState,
  on(login, (state, { username }) => ({
    username,
    loggedIn: true,
  })),
  on(logout, () => ({
    username: '',
    loggedIn: false,
  }))
);

export function userLoginReducer(state: UserLogin | undefined, action: Action) {
  return _userLoginReducer(state, action);
}
