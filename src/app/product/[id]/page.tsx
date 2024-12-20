import productApiRequest from "@/apiRequests/product";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";

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
        title: product.name,
        description: product.description,
    };
}

export default async function DetialProduct({ params }: Props) {
    const id = (await params).id;
    let product = undefined;
    try {
        const { payload } = await getDetail(Number(id));
        product = payload.data;
    } catch (error) {}
    return (
        <div key={product.id} className="flex space-x-4">
            <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={180}
                className="w-32 h-32 object-cover"
            />
            <h3>{product.name}</h3>
            <div>{product.price}</div>
        </div>
    );
}
