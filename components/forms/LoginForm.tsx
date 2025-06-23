"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { HiOutlineIdentification } from "react-icons/hi2";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginFormSchema } from "@/lib/validation/loginValication";

interface LoginFormProps {
  loginIcon?: React.ReactNode;
  passwordIcon?: React.ReactNode;
}

export default function LoginForm({
  passwordIcon = <Lock className="w-5 h-5 text-gray-400" />,
}: LoginFormProps) {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login values:", values);
      toast.success("تم تسجيل الدخول بنجاح!", {
        description: "لقد تم تسجيل دخولك بنجاح.",
      });
    } catch (error) {
      console.error("خطأ في تسجيل الدخول", error);
      toast.error("فشل تسجيل الدخول", {
        description: "بيانات الدخول غير صحيحة. يرجى المحاولة مرة أخرى.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="grid gap-6">
          {/* Login ID Field (Email/Username/Phone) */}
          <div className="grid gap-4">
            <Label
              htmlFor="identifier"
              className="text-gray-600 dark:text-gray-300 "
            >
              البريد الإلكتروني او اسم المستخدم او رقم الهاتف
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <HiOutlineIdentification />
              </div>
              <Input
                id="identifier"
                type="text"
                placeholder="...example@example.com / john doe / +963"
                {...form.register("identifier")}
                className="border border-gray-200 hover:border-primary focus-within:border-primary dark:border-gray-500 bg-gray-50 dark:bg-zinc-800 pl-4 pr-10 py-3"
              />
            </div>
            {form.formState.errors.identifier && (
              <p className="text-sm text-red-500">
                {form.formState.errors.identifier.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="grid gap-4">
            <div className="flex items-center">
              <Label
                htmlFor="password"
                className="text-gray-600 dark:text-gray-300"
              >
                كلمة المرور
              </Label>
              <Link
                href="/forget_password"
                className="ml-auto text-sm dark:text-gray-300 hover:text-primary"
              >
                هل نسيت كلمة المرور؟
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                {passwordIcon}
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                {...form.register("password")}
                className="border border-gray-200 hover:border-primary focus-within:border-primary dark:border-gray-500 bg-gray-50 dark:bg-zinc-800 pl-4 pr-10 py-3"
              />
            </div>
            {form.formState.errors.password && (
              <p className="text-sm text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full text-white bg-primary hover:bg-primary/90 py-3 rounded-lg font-medium"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting
              ? "جاري تسجيل الدخول..."
              : "تسجيل الدخول"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
