import { CartProduct } from "@/models/cartproduct.model";

import { Categories } from "@/models/product.model";

export function getAllTags(list:CartProduct[]):string{
    const allCategoires:Categories[] =[]
    for (let i =0;i<list.length;i++){
        if(!allCategoires.includes(list[i].category)){
            allCategoires.push(list[i].category)
        }
    }
    return allCategoires.join(" ")
}