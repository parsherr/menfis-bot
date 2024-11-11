"use client";

import { ReactNode, useState } from "react";
import { HiBars3, HiChevronRight } from "react-icons/hi2";
import Drawer from "./Drawer";

export type Page = {
  meta: {
    title: string;
    order: number;
    description: string;
    slug: string;
  };
  category: {
    name: string;
    slug: string;
  };
  html: ReactNode;
};

export type PagesTree = {
  category: {
    name: string;
    slug: string;
  };
  pages: Page[];
}[];

export default function MobileNav({ page, pagesTree }: { page: Page; pagesTree: PagesTree }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} setOpen={setOpen} page={page} pagesTree={pagesTree} />
      <nav className="sticky top-[3.656rem] flex items-center gap-3 bg-slate-900 bg-opacity-70 px-4 py-2 backdrop-blur lg:hidden">
        <div>
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-1 transition-all duration-300 hover:bg-slate-800"
          >
            <HiBars3 className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-1 flex items-center gap-1">
          <span className="text-sm">{page.category.name}</span>
          <HiChevronRight className="h-3 w-3 stroke-1" />
          <span className="text-sm text-slate-300">{page.meta.title}</span>
        </div>
      </nav>
    </>
  );
}
