import http from "@/lib/http";
import { MessageResType } from "@/schemaValidations/common.schema";
import {
    CreateProductBodyType,
    ProductListResType,
    ProductResType,
    UpdateProductBodyType,
} from "@/schemaValidations/product.schema";

const productApiRequest = {
    get: () =>
        http.get<ProductListResType>("/products", {
            cache: "no-store",
        }),
    getDetails: (id: number) =>
        http.get<ProductListResType>(`/products/${id}`, {
            cache: "no-store",
        }),
    update: (id: number, body: UpdateProductBodyType) =>
        http.put<ProductResType>(`/products/${id}`, body),
    create: (body: CreateProductBodyType) =>
        http.post<ProductResType>("/products", body),
    uploadImage: (body: FormData) =>
        http.post<{
            message: string;
            data: string;
        }>("/media/upload", body),
    delete: (id: number) => http.delete<MessageResType>(`/products/${id}`),
};

export default productApiRequest;
