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
import { useState } from "react";
import {
    UpdateMeBody,
    UpdateMeBodyType,
} from "@/schemaValidations/account.schema";
import accountApiRequest from "@/apiRequests/account";

export default function ProfileUpdateForm({ profile }: { profile: any }) {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<UpdateMeBodyType>({
        resolver: zodResolver(UpdateMeBody),
        defaultValues: {
            name: profile.name,
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof UpdateMeBody>) {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const result = await accountApiRequest.updateProfile(values);
            toast({
                description: result.payload.message,
            });
            router.refresh();
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
                    <FormControl>
                        <FormLabel>Mật khẩu</FormLabel>
                        <Input type="email" value={profile.email} readOnly />
                    </FormControl>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên</FormLabel>
                                <FormControl>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập tên"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center content-center !mt-4">
                        <Button type="submit" className="w-full">
                            Cập nhật
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
