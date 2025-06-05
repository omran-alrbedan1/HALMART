"use client";

import { TrendingUp, TrendingDown, ArrowUp, ArrowDown } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", profit: 186, loss: 80 },
  { month: "February", profit: 305, loss: 200 },
  { month: "March", profit: 237, loss: 120 },
  { month: "April", profit: 73, loss: 190 },
  { month: "May", profit: 209, loss: 130 },
  { month: "June", profit: 214, loss: 140 },
];

const chartConfig = {
  profit: {
    label: "الارباح",
    color: "#3498db",
  },
  loss: {
    label: "الخسائر",
    color: "#e74c3c",
  },
} satisfies ChartConfig;

export function ProfitAndLossComponent() {
  // Calculate totals for the footer
  const totalProfit = chartData.reduce((sum, item) => sum + item.profit, 0);
  const totalLoss = chartData.reduce((sum, item) => sum + item.loss, 0);
  const netProfit = totalProfit - totalLoss;
  const profitPercentage = ((netProfit / totalProfit) * 100).toFixed(1);

  return (
    <Card className="border rounded-lg shadow-xs hover:shadow-md transition-shadow">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="profit"
              fill="var(--color-profit)"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
            <Bar
              dataKey="loss"
              fill="var(--color-loss)"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 pt-0">
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 p-3 border rounded-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <span>الأرباح</span>
            </div>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-xl font-bold text-gray-800 dark:text-gray-300">
                {totalProfit.toLocaleString()} ل.س
              </span>
              <span className="text-xs border border-blue-400 flex items-center text-blue-600 px-2 py-1 rounded-full">
                <ArrowUp className="w-3 h-3 ml-1" />
                {profitPercentage}%
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 p-3 border rounded-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              <TrendingDown className="w-4 h-4 text-red-500" />
              <span>الخسائر</span>
            </div>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-xl font-bold text-gray-800 dark:text-gray-300">
                {totalLoss.toLocaleString()} ل.س
              </span>
              <span className="text-xs border border-red-400 flex items-center text-red-400 px-2 py-1 rounded-full">
                <ArrowDown className="w-3 h-3 ml-1" />
                {profitPercentage}%
              </span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
