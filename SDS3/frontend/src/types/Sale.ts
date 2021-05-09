import { Seller } from "./Seller";

export type AmountGroupedBySeller = {
    sellerName: string,
    sumSales: number
};

export type SuccessIndicator = {
    sellerName: string,
    visited: number,
    deals: number
};

export type Sale = {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller: Seller
};

export type SalesPage = {
    content?: Sale[],
    totalPages: number,
    totalElements: number,
    last: boolean,
    numberOfElements?: number,
    size?: number,
    number: number,
    first: boolean,
    empty?: boolean
}