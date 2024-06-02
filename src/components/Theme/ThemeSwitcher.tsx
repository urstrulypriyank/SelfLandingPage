"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { SunIcon, MoonIcon } from "@/assets/Icons";
import { z } from "zod";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const element = document.getElementById("theme-switch")?.children[0];
    element?.classList.add("animate-spin");
    const id = setTimeout(() => {
      element?.classList.remove("animate-spin");
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  const handleClick = (e: any) => {
    e.preventDefault();
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
    return;
  };

  if (theme === "dark")
    return (
      <button
        id="theme-switch"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <SunIcon className="" />
      </button>
    );
  else
    return (
      <button
        id="theme-switch"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <MoonIcon />
      </button>
    );
};

export default ThemeSwitcher;
