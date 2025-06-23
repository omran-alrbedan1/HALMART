import { Providers } from "@/components/providers/ThemeProvider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "تسجيل دخول",
  description: "سجل للدخول للتطبيق ",
  icons: {
    icon: "/images/HAL MART.png",
  },
};
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Providers>{children}</Providers>
    </div>
  );
};

export default AuthLayout;
