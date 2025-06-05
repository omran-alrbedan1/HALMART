"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "antd";
import {
  Search,
  Filter,
  Calendar,
  FileText,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  CalendarDays,
  CircleDollarSign,
  TrendingUp,
  TrendingDown,
  Receipt,
  AlertTriangle,
  Award,
  Star,
  Plus,
  Download,
  ArrowUp,
  ArrowDown,
  Coins,
  CalendarDaysIcon,
} from "lucide-react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TransactionsTable } from "@/components/tables/PaymentTable";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import ExportModals from "@/components/modals/ExportModals";

interface TransactionType {
  key: string;
  date: string;
  type: string;
  amount: string;
  account: string;
  counterparty: string;
  category: string;
  status: string;
}

const Transactions = () => {
  const [isOpenExportModal, setIsOpenExportModal] = useState<boolean>(false);

  const transactions: TransactionType[] = [
    {
      key: "1",
      date: "21.03.23",
      type: "فاتورة",
      amount: "+150,000",
      account: "الحساب الرئيسي",
      counterparty: "محل الخضار السريع",
      category: "مبيعات طماطم",
      status: "مدفوع",
    },
    {
      key: "2",
      date: "20.03.23",
      type: "فاتورة",
      amount: "+75,000",
      account: "الحساب الرئيسي",
      counterparty: "مطعم النخبة",
      category: "مبيعات بصل",
      status: "مدفوع",
    },
    {
      key: "3",
      date: "19.03.23",
      type: "مصروف",
      amount: "-50,000",
      account: "الحساب الرئيسي",
      counterparty: "مورد الخضار",
      category: "شراء بندورة",
      status: "مدفوع",
    },
    {
      key: "4",
      date: "18.03.23",
      type: "مصروف",
      amount: "-30,000",
      account: "الحساب الرئيسي",
      counterparty: "مورد الفواكه",
      category: "شراء تفاح",
      status: "مدفوع",
    },
    {
      key: "5",
      date: "17.03.23",
      type: "دخل",
      amount: "+200,000",
      account: "الحساب الرئيسي",
      counterparty: "سوبر ماركت الهال",
      category: "مبيعات خضار متنوعة",
      status: "مدفوع",
    },
    {
      key: "6",
      date: "16.03.23",
      type: "مصروف",
      amount: "-25,000",
      account: "الحساب الرئيسي",
      counterparty: "شركة التوصيل",
      category: "مصاريف نقل",
      status: "متأخر",
    },
    {
      key: "7",
      date: "15.03.23",
      type: "دخل",
      amount: "+180,000",
      account: "الحساب الرئيسي",
      counterparty: "مطعم الشام",
      category: "مبيعات خضار أسبوعية",
      status: "قيد الانتظار",
    },
  ];

  return (
    <div className="p-6 space-y-6 rtl" dir="rtl">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gray-100 dark:bg-transparent rounded-full">
          <Image
            src={icons.money}
            height={50}
            width={50}
            className="mx-auto"
            alt="wallet"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
            {" "}
            المعاملات
          </h1>
          <p className="text-sm text-green-600 mt-1">سوق الهال - دمشق</p>
        </div>
      </div>

      {/* Stats Cards with better visuals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Daily Income */}
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-semibold">
                  المبيعات اليومية
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  إجمالي النفقات لهذا اليوم
                </p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full transition-colors duration-300 group-hover:bg-primary/20">
                <Coins className="w-5 h-5 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Image
              src={images.dalyPayments}
              height={130}
              width={130}
              className="mx-auto transition-transform duration-500 group-hover:scale-110"
              alt="wallet"
            />
          </CardContent>
          <CardFooter className="">
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">450,000</p>
              <span className="text-lg font-medium text-gray-600">ل.س</span>
            </div>
          </CardFooter>
        </Card>

        {/* Monthly Expenses */}

        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-semibold">
                  المصروفات الشهرية
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  إجمالي النفقات لهذا الشهر
                </p>
              </div>
              <div className="bg-gray-500/10 p-2 rounded-full transition-colors duration-300 group-hover:bg-gray-500/20">
                <CalendarDaysIcon className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Image
                src={images.expenses}
                height={120}
                width={120}
                className="mx-auto transition-transform duration-500 group-hover:scale-110"
                alt="Monthly expenses illustration"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">2,500,000</p>
              <span className="text-lg font-medium text-muted-foreground">
                ل.س
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              <span className="text-primary font-medium">+12%</span> عن الشهر
              الماضي
            </p>
          </CardFooter>
        </Card>

        {/* Top Product */}

        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-semibold">
                  المنتج الأكثر مبيعاً
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  إجمالي المبيع
                </p>
              </div>
              <div className="bg-yellow-500/10 p-2 rounded-full transition-colors duration-300 group-hover:bg-yellow-500/20">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Image
                src={images.tomato}
                height={120}
                width={120}
                className="mx-auto transition-transform duration-500 group-hover:scale-110"
                alt="top product"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div>
              <p className="text-xl font-bold ">البندورة</p>
              <p className="text-sm text-muted-foreground">
                1,200 كغ هذا الشهر
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              سجل المعاملات
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
              <Button
                type="primary"
                className="gap-2 bg-green-600 hover:bg-green-700"
              >
                <Plus className="w-4 h-4" />
                إضافة معاملة
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
                placeholder="ابحث عن معاملة، عميل، أو منتج..."
                className="w-full pl-10 pr-4 py-2 border-2 rounded-lg text-sm   focus:border-primary"
              />
            </div>
            <Button
              type="default"
              className="gap-2"
              icon={<Filter className="w-4 h-4" />}
            >
              تصفية
            </Button>
            <Button
              type="default"
              className="gap-2"
              icon={<CalendarDays className="w-4 h-4" />}
            >
              هذا الشهر
            </Button>
          </div>

          <TransactionsTable transactions={transactions} />
        </CardContent>
      </Card>
      <ExportModals
        isModalOpen={isOpenExportModal}
        setIsModalOpen={setIsOpenExportModal}
      />
    </div>
  );
};

export default Transactions;
