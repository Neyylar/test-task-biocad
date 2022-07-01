import {get} from "../utils/fetcher";
import {ProductResponse, ProductTypeResponse} from "../shared/Product";

export const getProducts = () => get<ProductResponse>('/api/products');

export const getTypes = () => get<ProductTypeResponse>('/api/types');
