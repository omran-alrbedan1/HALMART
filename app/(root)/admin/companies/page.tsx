"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, Filter, Plus, Download, Building } from "lucide-react";
import { Button, Modal } from "antd";
import Image from "next/image";
import { icons } from "@/constants/icons";
import CompaniesTable from "@/components/tables/CompaniesTable";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AddCompanyForm } from "@/components/forms/AddCompanyForm";

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

const CompanyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companies, setCompanies] = useState([
    {
      key: "1",
      companyName: "شركة الفواكه الطازجة",
      managerEmail: "manager1@example.com",
      managerName: "أحمد محمد",
      managerPassword: "123",
    },
    {
      key: "2",
      companyName: "مزارع الخضار الموسمية",
      managerEmail: "manager2@example.com",
      managerName: "محمد علي",
      managerPassword: "123",
    },
    {
      key: "3",
      companyName: "تمور الجزيرة",
      managerEmail: "manager3@example.com",
      managerName: "سالم عبدالله",
      managerPassword: "123",
    },
    {
      key: "4",
      companyName: "الأعشاب العطرية",
      managerEmail: "manager4@example.com",
      managerName: "فاطمة خالد",
      managerPassword: "123",
    },
    {
      key: "5",
      companyName: "البصل والثوم الذهبي",
      managerEmail: "manager5@example.com",
      managerName: "إبراهيم محمد",
      managerPassword: "123",
    },
  ]);

  const form = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      companyName: "",
      managerName: "",
      managerEmail: "",
      managerPassword: "",
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.reset();
  };

  return (
    <div className="p-6 space-y-6 rtl" dir="rtl">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gray-100 dark:bg-transparent rounded-full">
          <Image
            src={icons.company}
            height={50}
            width={50}
            className="mx-auto"
            alt="company"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
            الشركات
          </h1>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Total Companies Card */}
        <Card className="border border-blue-100 shadow-xs dark:border-0 transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-blue-600 dark:text-gray-300">
                  إجمالي الشركات
                </p>
                <h3 className="text-2xl font-bold mt-1">{companies.length}</h3>
              </div>
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-800/30">
                <Building className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New This Month Card */}
        <Card className="border border-green-100 shadow-xs dark:border-0 transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-green-600 dark:text-gray-300">
                  شركات جديدة هذا الشهر
                </p>
                <h3 className="text-2xl font-bold mt-1">2</h3>
              </div>
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-800/30">
                <Plus className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Companies Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              قائمة الشركات
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button type="default" className="gap-2">
                <Download className="w-4 h-4" />
                تصدير
              </Button>
              <Button
                type="primary"
                className="gap-2 bg-green-600 hover:bg-green-700"
                onClick={showModal}
              >
                <Plus className="w-4 h-4" />
                إضافة شركة
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 pb-4 pt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن شركة، مدير، أو بريد إلكتروني..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-green-200 focus:border-green-500"
              />
            </div>
            <Button
              type="default"
              className="gap-2"
              icon={<Filter className="w-4 h-4" />}
            >
              تصفية
            </Button>
          </div>
          <CompaniesTable data={companies} />
        </CardContent>
      </Card>

      {/* Add Company Modal */}
      <Modal
        title="إضافة شركة جديدة"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width={600}
      >
        <AddCompanyForm onCancel={handleCancel} />
      </Modal>
    </div>
  );
};

export default CompanyPage;
