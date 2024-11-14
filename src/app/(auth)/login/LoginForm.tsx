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
import { login } from "@/service/apiService";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/store";
import { doLogin } from "@/store/authSlice";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    // 1. Define your form.
    const form = useForm({
        // resolver: zodResolver(LoginBody),
        defaultValues: {
            email: "",
            password: "",
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
        if (!password) {
            toast({
                description: "Not empty password",
            });
            return;
        }
        const res = await login(email, password);

        if (res && res.statusCode === 200) {
            toast({
                description: res.message,
                className: "bg-green-500",
            });
            const data = {
                token: res.token,
                refreshToken: res.refreshToken,
                id: res.users.id,
                email: res.users.email,
                name: res.users.name,
                password: res.users.password,
                role: res.users.role,
            };
            dispatch(doLogin(data));
            router.push("/");
        } else {
            setEmail("");
            setPassword("");
            toast({
                description: res.message,
                className: "bg-red-500",
            });
        }
    }
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
