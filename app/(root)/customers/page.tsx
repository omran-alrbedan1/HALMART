import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, Filter, Plus, Users, Download, Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";
import CounterpartiesTable from "@/components/tables/SuppliersTable";
import { Button } from "antd";
import Image from "next/image";
import { icons } from "@/constants/icons";
import CustomersTable from "@/components/tables/CustomersTable";

const CustomersPage = () => {
  const customers = [
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
            src={icons.customers}
            height={50}
            width={50}
            className="mx-auto"
            alt="wallet"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
            {" "}
            الزبائن
          </h1>
        </div>
      </div>
      {/* Counterparties Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Total Customers Card */}
        <Card className="border border-blue-100 shadow-xs dark:border-0  transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-blue-600 dark:text-gray-300">
                  إجمالي الزبائن
                </p>
                <h3 className="text-2xl font-bold mt-1">30</h3>
              </div>
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-800/30">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New This Month Card */}
        <Card className="border border-green-100 shadow-xs dark:border-0  transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-green-600 dark:text-gray-300">
                  زبائن جدد هذا الشهر
                </p>
                <h3 className="text-2xl font-bold mt-1">12</h3>
              </div>
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-800/30">
                <Plus className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Spending Card */}
        <Card className="border border-purple-100 shadow-xs dark:border-0  transition-all hover:shadow-md hover:-translate-y-0.5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-purple-600 dark:text-gray-300">
                  متوسط الإنفاق
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {Math.round(
                    customers.reduce((sum, c) => sum + c.balance, 0) /
                      customers.length
                  )}{" "}
                  ر.س
                </h3>
              </div>
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-800/30">
                <Wallet className="w-6 h-6 text-purple-600 dark:text-purple-300" />
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
              قائمة الزبائن
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button type="default" className="gap-2">
                <Download className="w-4 h-4" />
                تصدير
              </Button>
              <Button
                type="primary"
                className="gap-2 bg-green-600 hover:bg-green-700"
              >
                <Plus className="w-4 h-4" />
                إضافة زبون
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
          <CustomersTable data={customers} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomersPage;
