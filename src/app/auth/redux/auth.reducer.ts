import { Action } from '@ngrx/store';
import { AuthLogin, AuthActionsType } from './auth.actions';

export function authReducer(state = {}, action: AuthLogin) {
    // console.log(`run: ${action.type} payload:`);
    console.log(action.payload);
    switch (action.type) {
        case AuthActionsType.LOG_IN:
            console.log(`login: start`);
            return { ...state };
        case AuthActionsType.LOG_IN_SUCCESS:
            console.log(`login: success`);
            return { ...state, user: action.payload };
        case AuthActionsType.LOG_IN_FAIL:
            return { ...state, test: action.payload };
        default:
            return state;
    }
}