"use client";
import productApiRequest from "@/apiRequests/product";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function ButtonDelete(id: any) {
    const router = useRouter();
    const handleDeleteProduct = async () => {
        if (confirm("Delete product???") == true) {
            const res = await productApiRequest.delete(id.id);
            toast({
                description: res.payload.message,
            });
            router.refresh();
        }
    };
    return (
        <Button variant={"destructive"} onClick={handleDeleteProduct}>
            Delete
        </Button>
    );
}
