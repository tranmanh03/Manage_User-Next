import http from "@/lib/http";
import {
    CreateProductBodyType,
    ProductListResType,
    ProductResType,
    UpdateProductBodyType,
} from "@/schemaValidations/product.schema";

const productApiRequest = {
    get: () => http.get<ProductListResType>("/products"),
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
};

export default productApiRequest;
