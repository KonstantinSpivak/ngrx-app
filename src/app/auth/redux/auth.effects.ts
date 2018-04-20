import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { AuthActionsType } from './auth.actions';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/service/auth.service';
import { User } from '../../shared/model/user.model';
import { UserService } from '../../shared/service/user.service';
@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private user: UserService) { }

  @Effect() authActions$ = this.actions$.
    ofType(AuthActionsType.LOG_IN).
    switchMap(action =>
      this.user.auth('s', 'f')
        .map(user => ({ type: AuthActionsType.LOG_IN_SUCCESS, payload: user }))
        .catch(() => Observable.of({ type: AuthActionsType.LOG_IN_FAIL })));

}