"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { handleErrorApi } from "@/lib/utils";
import { useRef, useState } from "react";
import {
    CreateProductBody,
    CreateProductBodyType,
} from "@/schemaValidations/product.schema";
import productApiRequest from "@/apiRequests/product";
import Image from "next/image";

export default function FormAddProduct() {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { toast } = useToast();
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<CreateProductBodyType>({
        resolver: zodResolver(CreateProductBody),
        defaultValues: {
            name: "",
            price: 0,
            image: "",
            description: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof CreateProductBody>) {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("file", file as Blob);
            const uploadImageResult = await productApiRequest.uploadImage(
                formData
            );
            const imageUrl = uploadImageResult.payload.data;
            const result = await productApiRequest.create({
                ...values,
                image: imageUrl,
            });
            toast({
                description: result.payload.message,
            });
            router.push("/product");
        } catch (error: any) {
            handleErrorApi({
                error,
                setError: form.setError,
            });
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="flex justify-center">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit, (error) => {
                        console.log(error);
                        console.log(form.getValues("image"));
                    })}
                    className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
                    noValidate
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="tên"
                                        type="text"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Giá</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="giá"
                                        type="number"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mô tả</FormLabel>
                                <FormControl>
                                    <Input placeholder="mô tả" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hình ảnh</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        ref={inputRef}
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                setFile(file);
                                                field.onChange(
                                                    "http://localhost:3000/" +
                                                        file.name
                                                );
                                            }
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {file && (
                        <div>
                            <Image
                                src={URL.createObjectURL(file)}
                                width={128}
                                height={128}
                                alt="preview"
                                className="w-32 h-32 object-cover"
                            />
                            <Button
                                type="button"
                                variant={"destructive"}
                                size={"sm"}
                                onClick={() => {
                                    setFile(null);
                                    form.setValue("image", "");
                                    if (inputRef.current) {
                                        inputRef.current.value = "";
                                    }
                                }}
                            >
                                Xóa hình ảnh
                            </Button>
                        </div>
                    )}
                    <Button type="submit" className="!mt-8 w-full">
                        Thên sản phẩm
                    </Button>
                </form>
            </Form>
        </div>
    );
}
