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
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import authApiRequest from "@/apiRequests/auth";
import { clientSessionToken } from "@/lib/http";

export default function LoginForm() {
    const { toast } = useToast();
    const router = useRouter()
    // 1. Define your form.
    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof LoginBody>) {
        try {
            const result = await authApiRequest.login(values)
            toast({
              description: result.payload.message
            });
            await authApiRequest.auth({sessionToken: result.payload.data.token})
            clientSessionToken.value =  result.payload.data.token
            router.push('/me')
        } catch (error: any) {
            const errors = error.payload.errors as {
                field: string;
                message: string;
            }[];
            const status = error.status as number;
            if (status === 422) {
                errors.forEach((error) => {
                    form.setError(error.field as "email" | "password", {
                        type: "server",
                        message: error.message,
                    });
                });
            } else {
                toast({
                    title: "Error",
                    description: error.payload.message,
                    variant: "destructive",
                });
            }
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
                    <div className="flex justify-center content-center !mt-4">
                        <Button type="submit" className="w-full">
                            Đăng Nhập
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
