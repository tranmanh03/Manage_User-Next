"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsPending(true);

        const formData = new FormData(event.currentTarget);
        // In a real application, you would handle authentication here
        console.log("Form data:", Object.fromEntries(formData));

        // Simulating an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulating successful authentication
        router.push("/dashboard");

        setIsPending(false);
    };

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{isLogin ? "Login" : "Register"}</CardTitle>
                <CardDescription>
                    {isLogin
                        ? "Enter your credentials to login."
                        : "Create a new account."}
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">
                                Confirm Password
                            </Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                            />
                        </div>
                    )}
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="auth-switch"
                            checked={!isLogin}
                            onCheckedChange={() => setIsLogin(!isLogin)}
                        />
                        <Label htmlFor="auth-switch">
                            {isLogin
                                ? "Need an account?"
                                : "Already have an account?"}
                        </Label>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        {isPending
                            ? "Processing..."
                            : isLogin
                            ? "Login"
                            : "Register"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
