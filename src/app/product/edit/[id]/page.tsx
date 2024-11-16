import productApiRequest from "@/apiRequests/product";
import React from "react";
import FormAddProduct from "../../_components/formAddProduct";

import { cache } from "react";
import { ResolvingMetadata } from "next";

const getDetail = cache(productApiRequest.getDetails);

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = (await params).id;

    const { payload } = await getDetail(Number(id));
    const product = payload.data;

    return {
        title: "Edit " + product.name,
        description: product.description,
    };
}

export default async function EditProduct({ params }: Props) {
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
