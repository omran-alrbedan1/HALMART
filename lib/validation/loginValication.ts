import { z } from "zod";

export const loginFormSchema = z.object({
  identifier: z
    .string()
    .min(1, {
      message: "يجب إدخال البريد الإلكتروني أو اسم المستخدم أو رقم الهاتف",
    })
    .refine(
      (value) => {
        // Check if it's an email
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true;
        // Check if it's a phone number (simple check for numbers)
        if (/^[0-9]+$/.test(value)) return true;
        // Otherwise treat as username (must be at least 3 chars)
        return value.length >= 3;
      },
      {
        message:
          "يجب أن يكون البريد الإلكتروني أو اسم المستخدم أو رقم الهاتف صحيحاً",
      }
    ),
  password: z
    .string()
    .min(1, { message: "يجب إدخال كلمة المرور" })
    .min(6, { message: "يجب أن تحتوي كلمة المرور على الأقل 6 أحرف" }),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
});

export const subscribeFormShema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
});
