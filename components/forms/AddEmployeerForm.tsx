"use client";

import { Button } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// تعريف schema للتحقق من صحة البيانات
const employeeFormSchema = z.object({
  name: z.string().min(2, {
    message: "يجب أن يكون الاسم على الأقل حرفين",
  }),
  position: z.string().min(2, {
    message: "يجب أن تكون الوظيفة على الأقل حرفين",
  }),
  department: z.string().min(2, {
    message: "يجب أن يكون القسم على الأقل حرفين",
  }),
  phone: z.string().min(10, {
    message: "يجب أن يكون رقم الهاتف على الأقل 10 أرقام",
  }),
  hireDate: z.string().min(1, {
    message: "يجب إدخال تاريخ التعيين",
  }),
  shifts: z.string().min(1, {
    message: "يجب تحديد نظام الدوام",
  }),
});

interface AddEmployeeFormProps {
  onCancel: () => void;
}

export const AddEmployeeForm = ({ onCancel }: AddEmployeeFormProps) => {
  // تهيئة الفورم
  const form = useForm<z.infer<typeof employeeFormSchema>>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      name: "",
      position: "",
      department: "",
      phone: "",
      hireDate: "",
      shifts: "",
    },
  });
  const onSubmit = () => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>اسم العامل</FormLabel>
              <FormControl>
                <Input placeholder="أدخل اسم العامل" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الوظيفة</FormLabel>
              <FormControl>
                <Input placeholder="أدخل الوظيفة" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>القسم</FormLabel>
              <FormControl>
                <Input placeholder="أدخل القسم" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رقم الهاتف</FormLabel>
              <FormControl>
                <Input placeholder="أدخل رقم الهاتف" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hireDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تاريخ التعيين</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shifts"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نظام الدوام</FormLabel>
              <FormControl>
                <Input placeholder="أدخل نظام الدوام" {...field} />
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
