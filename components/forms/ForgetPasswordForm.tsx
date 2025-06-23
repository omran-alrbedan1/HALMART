"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineMailOutline } from "react-icons/md";

import { forgotPasswordSchema } from "@/lib/validation/loginValication";

export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    try {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("تم إرسال رابط إعادة التعيين", {
        description:
          "إذا كان هناك حساب مسجل بهذا البريد الإلكتروني، ستصلك رسالة تحتوي على رابط إعادة تعيين كلمة المرور.",
      });
    } catch (error) {
      console.error("Error sending reset link", error);
      toast.error("فشل إرسال رابط التعيين", {
        description:
          "حدث خطأ أثناء محاولة إرسال رابط إعادة التعيين. يرجى المحاولة مرة أخرى.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-right"
        dir="rtl"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold dark:text-gray-200">
            نسيت كلمة المرور؟
          </h1>
          <p className="w-full text-sm text-gray-600 dark:text-gray-300">
            أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-4">
            <Label htmlFor="email" className="text-gray-600 dark:text-gray-300">
              البريد الإلكتروني
              <span className="text-red-400 text-2xl mr-1">*</span>{" "}
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <MdOutlineMailOutline className="text-primary" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
                {...form.register("email")}
                className="border border-gray-200 hover:border-primary focus-within:border-primary dark:border-gray-500 bg-gray-50 dark:bg-zinc-800 pl-4 pr-10 py-3" // Added text-right
              />
            </div>

            {form.formState.errors.email && (
              <p className="text-sm text-red-500 text-right">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full text-white bg-primary hover:bg-primary/90"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting
              ? "جاري الإرسال..."
              : "إرسال رابط التعيين"}
          </Button>

          <div className="text-center text-sm">
            <Link href="/sign-in" className="text-primary hover:underline">
              العودة لتسجيل الدخول
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
