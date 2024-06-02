import React from "react";
import { SocialSiteData, NavLinks } from "@/lib/constant";
import NavLink from "./NavLink";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex w-screen snap-center  justify-between items-center  md:px-10 md:flex-row flex-col-reverse h-20 ">
      <NavList DataList={NavLinks} />
      <Logo />
      <NavList DataList={SocialSiteData} />
    </nav>
  );
};

export default Navbar;

const NavList = ({ DataList }: { DataList: DataListType[] }) => {
  return (
    <div className="flex h-12 space-x-2 items-center">
      {DataList.map((Item) => {
        const Ele = Item.icon;
        if (Ele)
          return (
            <a key={Item.id} href={Item.href} target="_blank">
              <Ele className="border rounded-full h-full w-auto   hover:-translate-y-0.5 " />
            </a>
          );
        return <NavLink name={Item.name} href={Item.href} key={Item.id} />;
      })}
      {DataList[0].icon && <ThemeSwitcher />}
    </div>
  );
};
const Logo = () => (
  <div className="border border-border font-bold p-2 rounded-full bg-foreground h-10 text-background mr-10 hidden md:block">
    PR
  </div>
);

type DataListType = {
  id: number;
  icon?: React.FC<any>;
  href: string;
  name: string;
};
