import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { HiExternalLink } from "react-icons/hi";

const PATHS: Record<string, { path: string; name: string; newTab?: boolean }[]> = {
  Menfis: [
    { path: "/", name: "Anasayfa" },
    { path: "/docs/introduction/getting-started", name: "Dökümanlar" },
    { path: "/docs/sponsors/nodesty", name: "Sponsor"},
  ],
  Linkler: [
    { path: "/invite", name: "Davet Et", newTab: true },
    { path: "/discord", name: "Discord", newTab: true },
    { path: "/vote", name: "Oy Ver", newTab: true },
    { path: "/github", name: "GitHub", newTab: true },
  ],
  Yasal: [
    { path: "/docs/legal/term-service", name: "Hizmet Şartları" },
    { path: "/docs/legal/privacy-policy", name: "Gizlilik Politikası" },
  ],
};

export default function Footer({ commitSha }: { commitSha?: string }) {
  return (
    <footer className="mb-12 mt-24 flex justify-center">
      <div className="flex w-full max-w-5xl flex-col gap-6 px-4 text-left lg:flex-row lg:gap-0">
        <div className="flex flex-col lg:min-w-max">
          <div className="mb-4 flex items-center gap-2">
            <Image src={logo} className="h-12 w-12 rounded-full" alt="Menfis Logo" />
            <h1 className="text-2xl font-bold text-slate-300">Menfis</h1>
          </div>
          <p className="mb-1 whitespace-pre-line">Bot developed by <a href="https://www.parsher.xyz"><b><u>Parsher</u></b></a>, Website developed by <a href="https://efwlxc.xyz/"><b><u>Kroxly</u></b></a> ❤️</p>
          <div className="flex gap-3">
            <span>© {new Date().getFullYear()} Tüm Hakları Saklıdır</span>
            {commitSha ? (
              <a
                href={`https://github.com/GodderE2D/reindeer-web/commit/${commitSha}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <code style={{ display: "none" }}>{commitSha.slice(0, 7)}</code>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex w-full flex-col justify-end gap-4 text-left lg:flex-row lg:gap-16">
          {Object.entries(PATHS).map(([category, paths]) => (
            <div key={category} className="flex flex-col">
              <h2 className="mb-3 font-semibold uppercase tracking-wide">{category}</h2>
              <div className="flex gap-3 lg:flex-col lg:gap-2">
                {paths.map(({ path, name, newTab }) => (
                  <span key={path} className="group flex items-center gap-1">
                    {newTab ? (
                      <>
                        <a href={path} target="_blank" className="text-slate-300 transition-all hover:text-red-500">
                          {name}
                        </a>
                        <HiExternalLink className="opacity-0 transition-all group-hover:opacity-100" />
                      </>
                    ) : (
                      <Link href={path} className="text-slate-300 transition-all hover:text-red-500">
                        {name}
                      </Link>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
