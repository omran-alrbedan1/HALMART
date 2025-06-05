"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import { ConfigProvider, theme } from "antd";
import { useTheme } from "next-themes";

// Combined provider that handles both shadcn/ui and Ant Design theming
export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <AntDesignThemeProvider>{children}</AntDesignThemeProvider>
    </NextThemesProvider>
  );
}

// Internal Ant Design theme provider that uses the next-themes context
function AntDesignThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme: appTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          appTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#2371ba",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
