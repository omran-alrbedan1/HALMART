"use client";

import { Button } from "antd";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      type="text"
      className=""
      variant="outlined"
      icon={theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}
