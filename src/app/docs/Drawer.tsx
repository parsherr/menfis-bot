import { Dispatch, Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";
import { Page, PagesTree } from "./MobileNav";
import Link from "next/link";

export default function Drawer({
  open,
  setOpen,
  page,
  pagesTree,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  page: Page;
  pagesTree: PagesTree;
}) {
  const isActive = (otherPage: Page) =>
    otherPage.meta.slug === page.meta.slug && otherPage.category.slug === page.category.slug;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-slate-800 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-20">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-slate-800 pb-6 pt-20 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-slate-200">Dökümantasyon</Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          onClick={() => setOpen(false)}
                          className="rounded-lg p-1 transition-all duration-300 hover:bg-slate-800"
                        >
                          <HiXMark className="h-6 w-6 stroke-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {pagesTree.map(({ category, pages }) => (
                      <div key={category.name} className="mb-8">
                        <h1 className="mb-3 cursor-text font-semibold text-slate-300">{category.name}</h1>
                        <ul className="-ml-px space-y-2 border-l border-slate-700">
                          {pages.map((page) => (
                            <li
                              key={page.meta.slug}
                              className={`-ml-px border-l pl-4 text-sm ${
                                isActive(page)
                                  ? "border-red-700 font-medium text-red-600 hover:border-red-500"
                                  : "border-slate-700 hover:border-slate-500 hover:text-slate-300"
                              }`}
                            >
                              <Link href={`/docs/${category.slug}/${page.meta.slug}`}>{page.meta.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
