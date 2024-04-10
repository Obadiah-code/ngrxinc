import { createAction, createReducer, on } from "@ngrx/store";
import { User } from "../../models/user.model";
import * as UserActions from "./user.actions";


export interface UserState {
    users: readonly User[];
    loading: boolean,
    loaded: boolean,
    error: any | null,
}

export const initalState: UserState = {
    users: [],
    loading: false,
    loaded: false,
    error: null,
}

export const userReducer = createReducer(
    initalState,
    on(UserActions.loadUsers, (state)=>(
        {...state, loading: true}
    )),
    on(UserActions.loadUsersSuccess, (state, {users})=>(
        {...state, loading: false, loaded: true ,users}
    )),
    on(UserActions.loadUsersFailure, (state, {error})=>(
        {...state, loading: false,error}
    )),
    on(UserActions.addUser, (state, {user})=>(
        {...state, loading: true, users: [...state.users, user]}
    )),
    on(UserActions.addUserSuccess, (state, {user})=>(
        {...state, loading: false, loaded: true, users: [...state.users, user]}
    )),
    on(UserActions.addUserFailure, (state, {error})=>(
        {...state, loading: false, loaded: false, error}
    )),
    on(UserActions.removeUser, (state, {id})=>(
        {...state, loading: true, loaded: false, id}
    )),
    on(UserActions.removeUserSuccess, (state, {id})=>(
        {...state, users: state.users.filter(a=>a.id!==id), loading: false, loaded: false, id}
    )),
    on(UserActions.removeUserFailure, (state, error)=>(
        {...state, loading: false, loaded: false, error}
    )),
)