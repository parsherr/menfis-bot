import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { HiBars3 } from "react-icons/hi2";
import NavbarDropdown from "./NavbarDropdown";

const PATHS = [
  { path: "/docs/introduction/getting-started", name: "Dökümanlar" },
  { path: "/docs/sponsors/nodesty", name: "Sponsor"},
  { path: "/vote", name: "Oy Ver", newTab: true },
  { path: "/discord", name: "Destek Sunucusu", newTab: true },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex justify-center bg-slate-900 py-3 shadow">
      <div className="mx-4 flex w-full max-w-7xl items-center justify-center text-left">
        <NavbarDropdown paths={PATHS} />
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src={logo} className="h-8 w-8 rounded-full md:h-10 md:w-10" alt="Menfis Logo" />
            <h1 className="text-lg font-bold text-slate-300 transition-all duration-300 hover:text-slate-200 md:text-xl">
              Menfis
            </h1>
          </div>
        </Link>
        <nav className="flex w-full justify-end gap-2 text-right">
          {PATHS.map(({ path, name, newTab }) =>
            newTab ? (
              <a
                key={path}
                href={path}
                target="_blank"
                className="hidden rounded px-2 py-1.5 transition-all duration-300 hover:text-slate-300 md:block"
              >
                {name}
              </a>
            ) : (
              <Link
                key={path}
                href={path}
                className="hidden rounded px-2 py-1.5 transition-all duration-300 hover:text-slate-300 md:block"
              >
                {name}
              </Link>
            ),
          )}
          <a
            href="/invite"
            target="_blank"
            className="rounded bg-red-700 px-3 py-1.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-red-800 md:text-base"
          >
            Sunucuna Ekle
          </a>
        </nav>
      </div>
    </header>
  );
}
