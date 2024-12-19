import { CannabisProductI,VapeProductI,ProductI } from "./product.model"

export type CartActions= '@increase' | '@decrease'

export interface CartProductBase extends ProductI {
    quantity: number;
}

export type CartProduct = (CannabisProductI | VapeProductI) & CartProductBase;