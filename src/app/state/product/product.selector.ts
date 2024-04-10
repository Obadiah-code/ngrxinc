import { createFeatureSelector } from "@ngrx/store";
import { Product } from "../../models/product.mode";

export const productState = createFeatureSelector<ReadonlyArray<Product>>("products");

// export const productSelector = createFeatureSelector