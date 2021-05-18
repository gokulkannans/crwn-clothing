import { UserActionTypes } from './user-type';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURENT_USER,
    payload: user
});