'use client'

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

     const toggleTheme = () => {
        if (!document.startViewTransition) switchTheme()
            document.startViewTransition(switchTheme);
     }

  return (
    <Button
    variant={"outline"}
    onClick={toggleTheme}
    >
        {theme === "dark" ? <Moon/> : <Sun/>}
    </Button>
  );
}