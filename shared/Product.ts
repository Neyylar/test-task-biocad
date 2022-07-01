export interface Product {
    id: number;
    type: number;
    name: string;
    action: string;
    indication: string;
    devStage: number;
}

export interface ProductResponse {
    products: Array<Product>
}

export interface ProductType {
    id: number;
    name: string;
}

export interface ProductTypeResponse {
    types: Array<ProductType>
}
