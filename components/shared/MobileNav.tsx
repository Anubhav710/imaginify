"use client";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href={"/"} className="flex items-center gap-2 md:py-2 ">
        <Image
          src={"/assets/images/logo-text.svg"}
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src={"/assets/icons/menu.svg"}
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-screen  justify-between">
                <div>
                  <Image
                    src={"/assets/images/logo-text.svg"}
                    alt="logo"
                    width={152}
                    height={23}
                  />

                  <ul className="header-nav_elements ">
                    {navLinks.slice(0, 6).map((link) => {
                      const isActive = link.route === pathname;

                      return (
                        <li
                          key={link.route}
                          className={`${
                            isActive && "gradient-text"
                          } p-18 flex whitespace-nowrap text-dark-700`}
                        >
                          <Link href={link.route}>
                            <SheetTrigger className="sidebar-link ">
                              <Image
                                src={link.icon}
                                alt="logo"
                                width={24}
                                height={24}
                                className={`${isActive && "gradient-text"}`}
                              />
                              {link.label}
                            </SheetTrigger>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <ul className="mb-10">
                  {navLinks.slice(6).map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        key={link.route}
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                      >
                        <Link href={link.route}>
                          <SheetTrigger className="sidebar-link">
                            <Image
                              src={link.icon}
                              alt="logo"
                              width={24}
                              height={24}
                              className={`${isActive && ""}`}
                            />
                            {link.label}
                          </SheetTrigger>
                        </Link>
                      </li>
                    );
                  })}
                  <li className=" cursor-pointer gap-2 p-4">
                    <UserButton afterSignOutUrl="/" showName />
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;