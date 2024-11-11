"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { HiBars3 } from "react-icons/hi2";

export default function NavbarDropdown({ paths }: { paths: { path: string; name: string; newTab?: boolean }[] }) {
  return (
    <Menu as="nav" className="relative inline-block text-left">
      <div>
        <Menu.Button className="mr-1 rounded-lg p-1 transition-all duration-300 hover:bg-slate-800 md:hidden">
          <HiBars3 className="h-6 w-6" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="bg- absolute left-0 mt-2 w-56 origin-top-left divide-y divide-slate-700 rounded-md bg-slate-800 shadow-lg ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {paths.map(({ path, name, newTab }) => (
              <Menu.Item key={path}>
                {newTab ? (
                  <a
                    href={path}
                    target="_blank"
                    className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-slate-300 hover:bg-slate-700"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    href={path}
                    className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-slate-300 hover:bg-slate-700"
                  >
                    {name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
