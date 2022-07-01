import {NextApiRequest, NextApiResponse} from "next";
import {ProductTypeResponse} from "../../shared/Product";
import TYPES from "../../mocks/TYPES_MOCKS.json";

export default function apiRouteHandler(
    req: NextApiRequest,
    res: NextApiResponse<ProductTypeResponse>
) {
    res.status(200).json({types: TYPES});
}
