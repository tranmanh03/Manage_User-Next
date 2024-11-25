"use client";

import setLanguageValue from "@/actions/set-language";
import { useEffect, useState } from "react";

export default function DropDown() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
    setLanguageValue(selectedLanguage);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="p-2 rounded-md outline-none"
    >
      <option value="vi">Vietnamese</option>
      <option value="en">English</option>
    </select>
  );
}
