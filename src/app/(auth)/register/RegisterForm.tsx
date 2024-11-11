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

export default function RegisterForm() {
    // 1. Define your form.
    const form = useForm({
        // resolver: zodResolver(),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit() {}
    return (
        <div className="flex justify-center">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2 max-w-[500px] w-full"
                    style={{
                        border: "1px solid #ccc",
                        padding: "24px",
                        borderRadius: "5px",
                    }}
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
                        <Button type="submit" className="w-full bg-dark">
                            Đăng ký
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
