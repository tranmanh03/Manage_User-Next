import productApiRequest from "@/apiRequests/product";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ButtonDelete from "./_components/button-delete";
import { cookies } from "next/headers";
export default async function ProductListPage() {
    const cookiStore = await cookies();
    const sessionToken = cookiStore.get("sessionToken")?.value;
    const { payload } = await productApiRequest.get();
    const productList = payload.data;

    return (
        <div>
            <h1>Product List</h1>
            <div className="space-y-5">
                {productList.map((product) => (
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
                        {Boolean(sessionToken) && (
                            <div className="flex space-x-2">
                                <Link href={`/product/${product.id}`}>
                                    <Button variant="outline">Edit</Button>
                                </Link>
                                <ButtonDelete id={product.id} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
