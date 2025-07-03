"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const companyFormSchema = z.object({
  companyName: z.string().min(2, {
    message: "اسم الشركة يجب أن يكون على الأقل حرفين",
  }),
  managerName: z.string().min(2, {
    message: "اسم المدير يجب أن يكون على الأقل حرفين",
  }),
  managerEmail: z.string().email({
    message: "يجب إدخال بريد إلكتروني صحيح",
  }),
  managerPassword: z.string().min(6, {
    message: "كلمة المرور يجب أن تكون على الأقل 6 أحرف",
  }),
});

interface AddCompanyFormProps {
  onCancel: () => void;
}

export const AddCompanyForm = ({ onCancel }: AddCompanyFormProps) => {
  const form = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      companyName: "",
      managerName: "",
      managerEmail: "",
      managerPassword: "",
    },
  });

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>اسم الشركة</FormLabel>
              <FormControl>
                <Input placeholder="أدخل اسم الشركة" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="managerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>اسم المدير</FormLabel>
              <FormControl>
                <Input placeholder="أدخل اسم المدير" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="managerEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>البريد الإلكتروني للمدير</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="أدخل البريد الإلكتروني"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="managerPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>كلمة المرور</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-3 pt-4">
          <Button onClick={onCancel}>إلغاء</Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-green-600 hover:bg-green-700"
          >
            حفظ
          </Button>
        </div>
      </form>
    </Form>
  );
};
