import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowDownRight,
  LineChart,
  Filter,
  Truck,
  FileText,
  UserPlus,
  PieChart,
  Scale,
  Calendar,
  ChartColumn,
  Coins,
  ShoppingCart,
  ClockFadingIcon,
} from "lucide-react";
import { ProfitAndLossComponent } from "@/components/charts/ProfitAndLossChart";
import ProvidersComponent from "@/components/ProvidersComponent";
import { SalesChart } from "@/components/charts/SalesChart";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const products = [
  {
    id: 1,
    name: "البندورة",
    description: "طازجة من المزرعة",
    quantity: "120 كغ",
    image: "https://picsum.photos/seed/tomato/200/200",
    color: "orange",
  },
  {
    id: 2,
    name: "التفاح",
    description: "صنف فاخر",
    quantity: "85 كغ",
    image: "https://picsum.photos/seed/apple/200/200",
    color: "red",
  },
  {
    id: 3,
    name: "الخس",
    description: "عضوي طازج",
    quantity: "60 كغ",
    image: "https://picsum.photos/seed/lettuce/200/200",
    color: "green",
  },
];

const HomePage = () => {
  return (
    <div className="p-6 space-y-6 rtl pb-32" dir="rtl">
      {/* Header with shop info */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-100 dark:bg-transparent rounded-full">
          <Image
            src={icons.shop}
            height={50}
            width={50}
            className="mx-auto"
            alt="wallet"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
            إدارة المحل - سوق الهال
          </h1>
          <p className="text-sm text-green-600 mt-1">
            متجر الخضار والفواكه الطازجة
          </p>
        </div>
      </div>

      {/* Total Balance */}
      <Card className="">
        <div className="flex items-start justify-between p-6">
          <div className="flex-1">
            <CardHeader className="pb-4 px-0">
              <CardTitle className="text-xl md:text-2xl  font-bold text-indigo-900">
                رصيد المحل
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <div className="space-y-2">
                <p className="text-xl md:text-4xl font-extrabold">
                  1,503,120 ل.س
                </p>
                <div className="flex items-center text-sm mt-2 ">
                  <ClockFadingIcon className="text-primary ml-3" />
                  آخر تحديث: اليوم 10:30 ص
                </div>
              </div>
            </CardContent>
          </div>

          <div className="relative w-40 h-40">
            <Image
              src={images.ballance}
              fill
              alt="balance illustration"
              className="object-contain drop-shadow-md"
            />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Daily Sales */}
        <Card className="">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-semibold">
                  المبيعات اليومية
                </CardTitle>
              </div>
              <div className="bg-secondary p-2 rounded-full">
                <Coins className="w-5 h-5 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Image
              src={images.dalyPayments}
              height={250}
              width={200}
              className="mx-auto"
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

        {/* Top Selling Products */}
        <Card className="">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-semibold">
                  الأكثر مبيعاً
                </CardTitle>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <ShoppingCart className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-1 ">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-3 rounded-lg "
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-15 h-15 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-300">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-gray-900 dark:text-gray-200 text-lg">
                    {product.quantity}
                  </span>
                  <span className="text-xs text-green-600 mt-1">
                    متوفر في المخزن
                  </span>
                </div>
              </div>
            ))}

            <button className="w-full mt-4 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
              عرض جميع المنتجات
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-medium">
                  إجراءات سريعة
                </CardTitle>
              </div>
              <div className="bg-purple-100 p-2 rounded-full">
                <PieChart className="w-5 h-5 text-purple-500" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="gap-2">
              <ArrowDownRight className="w-4 h-4 text-primary" />
              شراء بضاعة
            </Button>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4 text-primary" />
              تصفية
            </Button>
            <Button variant="outline" className="gap-2">
              <Truck className="w-4 h-4 text-primary" />
              مورد جديد
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4 text-primary" />
              فاتورة
            </Button>
            <Button variant="outline" className="gap-2">
              <Scale className="w-4 h-4 text-primary" />
              الجرد
            </Button>
            <Button variant="outline" className="gap-2">
              <UserPlus className="w-4 h-4 text-primary" />
              عميل جديد
            </Button>
            <Button variant="outline" className="gap-2 col-span-2">
              <Calendar className="w-4 h-4 text-primary" />
              مواعيد التوريد
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Sales Chart */}
      <Card className="border-none shadow-lg rounded-xl">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-semibold">
                تطور المبيعات الشهرية
              </CardTitle>
              <CardDescription>كانون ث - اذار</CardDescription>
            </div>
            <div className="bg-blue-100 p-2 rounded-full">
              <LineChart className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent className=" px-6 pb-6">
          <SalesChart />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expenses and Profit */}
        <Card className="">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-semibold">
                  الارباح و الخسائر
                </CardTitle>
                <CardDescription>نيسان - اذار</CardDescription>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <ChartColumn className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ProfitAndLossComponent />
          </CardContent>
        </Card>

        {/* Suppliers */}
        <Card className="">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-semibold">
                  الموردون الرئيسيون
                </CardTitle>
              </div>
              <div className="bg-red-100 p-2 rounded-full">
                <Truck className="w-5 h-5 text-red-500" />
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <ProvidersComponent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
