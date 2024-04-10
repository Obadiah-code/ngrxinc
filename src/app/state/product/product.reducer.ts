import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from '../../models/product.mode';

export const initialState: ReadonlyArray<Product> = [];

export const productReducer = createReducer(
    initialState,
    on(ProductActions.addProduct, (state, {product}) => {
        return [...state, product];
    }),
    on(ProductActions.removeProduct, (state, {id}) => {
        return state.filter(product => product.id !== id);
    }),

);