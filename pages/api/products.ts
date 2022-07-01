import type {NextApiRequest, NextApiResponse} from 'next'
import {ProductResponse, ProductTypeResponse} from "../../shared/Product";
import PRODUCTS from "../../mocks/PRODUCTS_MOCKS.json";

export default function apiRouteHandler(
    req: NextApiRequest,
    res: NextApiResponse<ProductResponse>
) {
    res.status(200).json({products: PRODUCTS});
}


