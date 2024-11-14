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
import { useState } from "react";
import { register } from "@/service/apiService";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
    async function onSubmit() {
        if (!email) {
            toast({
                description: "Not empty email",
            });
            return;
        }
        if (!name) {
            toast({
                description: "Not empty name",
            });
            return;
        }
        if (!password) {
            toast({
                description: "Not empty password",
            });
            return;
        }
        if (!confirmPassword) {
            toast({
                description: "Not empty confirmPassword",
            });
            return;
        }
        if (password !== confirmPassword) {
            toast({
                description: "password not equal confirmPassword",
            });
            return;
        }
        const res = await register(email, name, password, "USER");
        if (res && res.statusCode === 200) {
            toast({
                description: res.message,
                className: "bg-green-500",
                color: "text-white",
            });
            router.push("/login");
        }
    }
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
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
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
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
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
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
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
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
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
