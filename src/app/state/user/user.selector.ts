import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";


export const selectUsersSate = createFeatureSelector<UserState>("userState");


export const selectUsers = createSelector(selectUsersSate,
    (state) => state.users
)


export const selectLoading = createSelector(selectUsersSate,
    (state) => state.loading
)

export const selectLoaded = createSelector(selectUsersSate,
    (state) => state.loaded
)

export const selectError = createSelector(selectUsersSate,
    (state) => state.error
)