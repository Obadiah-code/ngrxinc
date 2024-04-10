import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import * as UserActions from '../user/user.actions';
import { catchError, map, of, switchMap } from "rxjs";
import { User } from "../../models/user.model";

@Injectable()

export class UserEffects {
    loadUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.loadUsers),
            switchMap(() => this.userService.get().pipe(
                map((users) => UserActions.loadUsersSuccess({ users: users as readonly User[] })),
                catchError((error) => of(UserActions.loadUsersFailure({ error })))
            ))
        )
    })
    addUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.addUser),
            switchMap(payload => this.userService.add(payload.user).pipe(
                map(user => UserActions.addUserSuccess({ user: payload.user })),
                catchError((error) => of(UserActions.addUserFailure({ error })))
            ))
        )
    })
    removeUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.removeUser),
            switchMap(payload => this.userService.delete(payload.id).pipe(
                map(data => UserActions.removeUserSuccess({ id: payload.id })),
                catchError((error) => of(UserActions.removeUserFailure({ error })))
            ))
        )
    })

    constructor(private actions$: Actions, private userService: UserService) {

    }
}