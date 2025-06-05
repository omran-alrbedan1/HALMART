"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Search,
  Filter,
  Plus,
  Users,
  Download,
  UserCheck,
  Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "antd";
import Image from "next/image";
import { icons } from "@/constants/icons";
import ExportModal from "@/components/modals/ExportModals";
import SuppliersTable from "@/components/tables/SuppliersTable";

const CounterpartiesPage = () => {
  const [isOpenExportModal, setIsOpenExportModal] = useState<boolean>(false);

  const Suppliers = [
    {
      key: "1",
      name: "محمد أحمد",
      contact: "0551234567",
      address: "سوق الهال، جناح 12",
      products: "خضار موسمية",
      type: "بائع دائم",
      balance: 1250,
    },
    {
      key: "2",
      name: "علي حسن",
      contact: "0509876543",
      address: "سوق الهال، جناح 8",
      products: "فواكه استوائية",
      type: "بائع موسمي",
      balance: 850,
    },
    {
      key: "3",
      name: "سالم عبدالله",
      contact: "0567890123",
      address: "سوق الهال، جناح 5",
      products: "تمور",
      type: "بائع دائم",
      balance: 3200,
    },
    {
      key: "4",
      name: "فاطمة خالد",
      contact: "0543210987",
      address: "سوق الهال، جناح 3",
      products: "أعشاب طازجة",
      type: "بائع يومي",
      balance: 420,
    },
    {
      key: "5",
      name: "إبراهيم محمد",
      contact: "0587654321",
      address: "سوق الهال، جناح 15",
      products: "بصل وثوم",
      type: "بائع دائم",
      balance: 1800,
    },
  ];

  return (
    <div className="p-6 space-y-6 rtl" dir="rtl">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gray-100 dark:bg-transparent rounded-full">
          <Image
            src={icons.truck}
            height={50}
            width={50}
            className="mx-auto"
            alt="wallet"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
            {" "}
            الموردون
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Suppliers Card */}
        <Card className="border border-blue-100 shadow-xs dark:border-0  transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-blue-600 dark:text-blue-200 mb-1">
                  إجمالي الموردين
                </p>
                <h3 className="text-3xl font-bold text-blue-800 dark:text-white mt-2">
                  {30}
                </h3>
                <p className="text-xs text-blue-500 dark:text-blue-300 mt-2">
                  +2 عن الشهر الماضي
                </p>
              </div>
              <div className="p-4 rounded-xl bg-blue-200 dark:bg-blue-900/40 backdrop-blur-sm">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Permanent Suppliers Card */}

        <Card className="border border-green-100 shadow-xs dark:border-0  transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-green-600 dark:text-green-200 mb-1">
                  موردين دائمين
                </p>
                <h3 className="text-3xl font-bold text-green-800 dark:text-white mt-2">
                  {20}
                </h3>
                <p className="text-xs text-green-500 dark:text-green-300 mt-2">
                  67% من الإجمالي
                </p>
              </div>
              <div className="p-4 rounded-xl bg-green-100 dark:bg-green-900/40 backdrop-blur-sm">
                <UserCheck className="w-8 h-8 text-green-600 dark:text-green-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seasonal Suppliers Card */}
        <Card className="border border-purple-200 shadow-xs dark:border-0 transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-purple-600 dark:text-purple-200 mb-1">
                  موردين موسميين
                </p>
                <h3 className="text-3xl font-bold text-purple-800 dark:text-white mt-2">
                  10
                </h3>
                <p className="text-xs text-purple-500 dark:text-purple-300 mt-2">
                  33% من الإجمالي
                </p>
              </div>
              <div className="p-4 rounded-xl bg-purple-200 dark:bg-purple-900/40 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* suppliers Table */}

      <Card className="border-0 shadow-sm">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              قائمة الموردون
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setIsOpenExportModal(true)}
                type="default"
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                تصدير
              </Button>
              <Button type="primary">
                <Plus className="w-4 h-4" />
                إضافة مورد
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 pb-4 pt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

              <Input
                placeholder="ابحث عن معاملة، عميل، أو منتج..."
                className="focus:outline-none border-2 focus:border-primary focus:ring-0  text-right"
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
          <SuppliersTable data={Suppliers} />
        </CardContent>
      </Card>
      <ExportModal
        isModalOpen={isOpenExportModal}
        setIsModalOpen={setIsOpenExportModal}
      />
    </div>
  );
};

export default CounterpartiesPage;
