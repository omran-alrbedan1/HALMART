"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 49 },
  { month: "August", desktop: 94 },
  { month: "September", desktop: 214 },
  { month: "October", desktop: 114 },
  { month: "November", desktop: 144 },
  { month: "December", desktop: 115 },
];

const chartConfig = {
  desktop: {
    label: "مبيعات",
    color: "#2371ba",
  },
} satisfies ChartConfig;

export function SalesChart() {
  return (
    <Card>
      <CardContent className="">
        <ChartContainer config={chartConfig} className="max-h-60 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium text-green-600 mb-3">
          ارتفاع بنسبة 5.2% هذا الشهر <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          عرض إجمالي المبيعات خلال آخر 12 أشهر
        </div>
      </CardFooter>
    </Card>
  );
}
