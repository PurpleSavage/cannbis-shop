import { CannabisProductI,VapeProductI,ProductI } from "./product.model"


export interface CartProductBase extends ProductI {
    quantity: number;
}

export type CartProduct = (CannabisProductI | VapeProductI) & CartProductBase;