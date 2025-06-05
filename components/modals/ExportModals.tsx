"use client";
import { Modal } from "antd";
import React, { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader2, FileText, FileSpreadsheet, Download, X } from "lucide-react";

export const ExportStatsValidation = z.object({
  reportType: z.string(),
  title: z.string().min(1, "العنوان مطلوب").trim(),
});

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

const ExportModal = ({ isModalOpen, setIsModalOpen }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  type FormValues = z.infer<typeof ExportStatsValidation>;

  const form = useForm<FormValues>({
    resolver: zodResolver(ExportStatsValidation),
    defaultValues: {
      reportType: "pdf",
      title: "",
    },
  });

  const handleCancel = () => {
    form.reset();
    setIsModalOpen(false);
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // await exportExam({
      //   fileName: values.title,
      //   type: values.reportType === "pdf" ? "pdf" : "xlsx",
      //   id: assignmentId,
      // });
      handleCancel();
    } catch (error) {
      console.error("فشل التصدير:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2">
          <Download className="w-5 h-5 text-primary" />
          <span>تصدير </span>
        </div>
      }
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={600}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4">
          <div className="grid grid-cols-1 gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>العنوان:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="أدخل عنوان الملف"
                      {...field}
                      className="focus:outline-none border-2 focus:border-primary focus:ring-0  text-right"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reportType"
              render={({ field }) => (
                <FormItem className="grid-cols-1" style={{ zIndex: 1000 }}>
                  <FormLabel>نوع التقرير:</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger
                        style={{ zIndex: 1000 }}
                        className="bg-gray-50 dark:bg-gray-700 text-right w-full mt-2"
                      >
                        <SelectValue placeholder="اختر نوع الملف" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent
                      style={{ zIndex: 1000 }}
                      className="text-right"
                    >
                      <SelectItem
                        value="pdf"
                        className="flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        <span>PDF</span>
                      </SelectItem>
                      <SelectItem
                        value="excel"
                        className="flex items-center gap-2"
                      >
                        <FileSpreadsheet className="w-4 h-4" />
                        <span>Excel</span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-start gap-4 pt-4">
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/80 flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>جاري التصدير...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>تصدير</span>
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="flex items-center gap-2 border border-red-500 text-red-500 hover:text-red-500"
            >
              <X className="w-4 h-4 text-red-500" />
              <span>إلغاء</span>
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default ExportModal;
