"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  const pathName = usePathname();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (pathName.toLowerCase() == "/" + name.toLowerCase()) setIsSelected(true);
    else if (pathName === "/" && name === "Home") setIsSelected(true);

    return () => setIsSelected(false);
  }, [pathName, name]);

  return (
    <Link href={href} className="relative text-base">
      <span className={`relative z-10 pb-1 ${isSelected ? "font-bold" : ""}`}>
        {name}
      </span>
      <span
        className={`absolute left-0 bottom-0 h-[1px] w-full bg-current transition-all duration-300 ease-out mt-4 ${
          isSelected ? "scale-x-100" : "scale-x-0"
        } origin-left`}
      ></span>
    </Link>
  );
}
