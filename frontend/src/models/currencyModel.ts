import type BaseModel from "./baseModel";

export default interface CurrencyModel{
    id: string;
    name: string;
    image: string;
    price : number;
}
