import productApiRequest from "@/apiRequests/product";
import React from "react";
import FormAddProduct from "../_components/formAddProduct";

export default async function DetailProduct({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const id = (await params).id;
    let product = undefined;
    try {
        const { payload } = await productApiRequest.getDetails(Number(id));
        product = payload.data;
    } catch (error) {}
    return (
        <div className="text-red-600">
            {product ? (
                <>
                    <FormAddProduct product={product} />
                </>
            ) : (
                <>not found</>
            )}
        </div>
    );
}
