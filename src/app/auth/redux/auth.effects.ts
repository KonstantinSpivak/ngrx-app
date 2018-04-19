import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AuthActionsType } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  @Effect() authActions$ = this.actions$.pipe(
    ofType(AuthActionsType.LOG_IN),
    tap(action => console.log(action)),
    map(() => ({ type: 'LOGGED_IN' }))
  );
}