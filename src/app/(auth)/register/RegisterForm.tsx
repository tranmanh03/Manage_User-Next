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
import {
    RegisterBody,
    RegisterBodyType,
} from "@/schemaValidations/auth.schema";
import authApiRequest from "@/apiRequests/auth";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { handleErrorApi } from "@/lib/utils";
import { useState } from "react";

export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<RegisterBodyType>({
        resolver: zodResolver(RegisterBody),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof RegisterBody>) {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const result = await authApiRequest.register(values);
            toast({
                description: result.payload.message,
            });
            await authApiRequest.auth({
                sessionToken: result.payload.data.token,
            });
            router.push("/me");
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
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2 max-w-[500px] w-full"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nhập email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Họ tên</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nhập họ tên"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nhập mật khẩu"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nhập lại mật khẩu</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nhập lại mật khẩu"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center content-center !mt-4">
                        <Button type="submit" className="w-full">
                            Đăng ký
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
