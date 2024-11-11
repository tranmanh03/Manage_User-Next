"use client";

import { useForm } from "react-hook-form";
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

export default function LoginForm() {
    // 1. Define your form.
    const form = useForm({
        // resolver: zodResolver(LoginBody),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit() {}
    return (
        <div className="flex justify-center">
            <Form {...form}>
                <form
                    style={{
                        border: "1px solid #ccc",
                        padding: "24px",
                        borderRadius: "5px",
                    }}
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
                        <Button type="submit" className="w-full bg-dark">
                            Đăng Nhập
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
