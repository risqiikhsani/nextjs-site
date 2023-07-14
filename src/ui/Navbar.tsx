"use client";
import * as React from "react";
import { Menu, Popover } from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const profile = [
  {
    name: "Profile",
    description: "Manage your profile",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Account",
    description: "Manage your account",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Settings",
    description: "Setting up your account and app`s settings",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Logout",
    description: "Log out from app",
    href: "#",
    icon: SquaresPlusIcon,
  },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 flex w-full p-4 flex-nowrap bg-amber-500 ">
      <a href="#" className="m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="w-auto h-8"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
      <a
        href="#"
        className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Get started
      </a>

      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="px-3 py-2 text-base font-semibold leading-7 text-gray-900 rounded-md hover:bg-gray-50"
        >
          {item.name}
        </a>
      ))}



      <a
        href="#"
        className="px-3 py-2 text-base font-semibold leading-7 text-gray-900"
      >
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}
