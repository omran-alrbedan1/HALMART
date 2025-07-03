"use client";

import {
  Store,
  Mail,
  User,
  Phone,
  MapPin,
  Calendar,
  Users,
  UserCog,
  UserCheck,
  Download,
  Plus,
  Search,
  Filter,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, Button, Modal } from "antd";
import type { TableColumnsType } from "antd";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { useState } from "react";
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
import { AddEmployeeForm } from "@/components/forms/AddEmployeerForm";

const VegetableStorePage = ({ params }: { params: { id: string } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // بيانات محل الخضار
  const storeData = {
    id: params.id,
    name: "سوق الخضار الطازج - فرع الرياض",
    owner: "علي عبد الرحمن",
    email: "info@freshveg-riyadh.com",
    address: "حي النخيل، شارع الملك فهد، الرياض 12345",
    phone: "+966 50 123 4567",
    established: "2018-09-01",
    openingHours: "6:00 صباحاً - 11:00 مساءً",
    employeesCount: 8,
  };

  // قائمة العمال
  const [employees, setEmployees] = useState([
    {
      key: "1",
      name: "محمد أحمد",
      position: "مدير المحل",
      department: "الإدارة",
      phone: "+966 50 111 2222",
      hireDate: "2018-10-15",
      status: "نشط",
      shifts: "صباحي (6ص-2م)",
    },
    {
      key: "2",
      name: "خالد سعيد",
      position: "مسؤول المخزن",
      department: "المخازن",
      phone: "+966 50 333 4444",
      hireDate: "2019-03-10",
      status: "نشط",
      shifts: "مسائي (2م-11م)",
    },
    {
      key: "3",
      name: "أحمد علي",
      position: "بائع",
      department: "المبيعات",
      phone: "+966 50 555 6666",
      hireDate: "2020-06-22",
      status: "إجازة",
      shifts: "صباحي",
    },
    {
      key: "4",
      name: "سالم عبدالله",
      position: "سائق توصيل",
      department: "التوصيل",
      phone: "+966 50 777 8888",
      hireDate: "2021-01-05",
      status: "نشط",
      shifts: "كامل اليوم",
    },
  ]);

  const columns: TableColumnsType<(typeof employees)[0]> = [
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          {record.position.includes("مدير") ? (
            <UserCog className="h-4 w-4 text-blue-500" />
          ) : record.position.includes("بائع") ? (
            <UserCheck className="h-4 w-4 text-green-500" />
          ) : (
            <User className="h-4 w-4" />
          )}
          {text}
        </div>
      ),
    },
    {
      title: "الوظيفة",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "القسم",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "تاريخ التعيين",
      dataIndex: "hireDate",
      key: "hireDate",
    },
    {
      title: "نظام الدوام",
      dataIndex: "shifts",
      key: "shifts",
    },
  ];

  // فتح وإغلاق المودال
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6 rtl" dir="rtl">
      {/* عنوان الصفحة */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gray-100 dark:bg-transparent rounded-full">
          <Image
            src={icons.store}
            height={52}
            width={52}
            className=""
            alt="sotre"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
            محل الخضار
          </h1>
        </div>
      </div>

      {/* بطاقات المعلومات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* بطاقة معلومات أساسية */}
        <Card className="border border-blue-100 shadow-xs dark:border-0 transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium text-blue-600 dark:text-gray-300">
                  معلومات المحل الأساسية
                </p>
                <div className="mt-2 space-y-2">
                  <p className="flex items-center gap-2">
                    <Store className="w-4 h-4" />
                    <span>{storeData.name}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>المالك: {storeData.owner}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{storeData.address}</span>
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-800/30">
                <Store className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* بطاقة التواصل */}
        <Card className="border border-green-100 shadow-xs dark:border-0 transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium text-green-600 dark:text-gray-300">
                  معلومات التواصل
                </p>
                <div className="mt-2 space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{storeData.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{storeData.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>ساعات العمل: {storeData.openingHours}</span>
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-800/30">
                <Phone className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* بطاقة العمال */}
        <Card className="border border-purple-100 shadow-xs dark:border-0 transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium text-purple-600 dark:text-gray-300">
                  إحصائيات العمال
                </p>
                <h3 className="text-2xl font-bold mt-2">
                  {storeData.employeesCount} عامل
                </h3>
              </div>
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-800/30">
                <Users className="w-6 h-6 dark:text-purple-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              قائمة العاملين
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button type="default" className="gap-2">
                <Download className="w-4 h-4" />
                تصدير البيانات
              </Button>
              <Button
                type="primary"
                className="gap-2 bg-green-600 hover:bg-green-700"
                onClick={showModal}
              >
                <Plus className="w-4 h-4" />
                إضافة عامل جديد
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
                placeholder="ابحث عن عامل بالاسم أو الوظيفة..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-green-200 focus:border-green-500"
              />
            </div>
            <Button
              type="default"
              className="gap-2"
              icon={<Filter className="w-4 h-4" />}
            >
              تصفية النتائج
            </Button>
          </div>
          <Table
            dataSource={employees}
            columns={columns}
            pagination={{ pageSize: 5 }}
            className="w-full"
          />
        </CardContent>
      </Card>

      <Modal
        title={
          <div className="flex items-center gap-2 text-primary">
            <UserCog className="w-5 h-5" />
            <span>إضافة عامل جديد</span>
          </div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width={600}
        className="[&_.ant-modal-header]:border-b-0 [&_.ant-modal-content]:p-0"
      >
        <div className="p-6">
          <AddEmployeeForm onCancel={handleCancel} />
        </div>
      </Modal>
    </div>
  );
};

export default VegetableStorePage;
