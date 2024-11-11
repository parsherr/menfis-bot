import Image from "next/image";
import Link from "next/link";
import { HiOutlineShieldCheck } from "react-icons/hi2";

import imageKolaycaPartner from "../../public/kolayca-partner.png";
import imagePartnerText from "../../public/partner-text.png";
import imageDavet from "../../public/davet.png";
import imageYetkiliLider from "../../public/yetkili-leaderboard.png";
import imageBanner from "../../public/menfis-banner.png";

export default async function Home() {
  return (
    <main>
      <div className="mx-4 mt-16 flex items-center justify-center">
        <div className="max-w-7xl">
          <div className="mb-20 flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="mb-4 bg-gradient-to-tl from-yellow-500 via-orange-500 to-red-500 bg-300% bg-clip-text text-4xl font-bold text-transparent motion-safe:animate-gradient">
                Anime sunucunuz için en iyi partner botu Menfis!
              </h1>
              <p className="mb-8 text-xl text-slate-300">
                Menfis partner botu sunucunuzda kolayca partnerlik yapmanıza yardımcı olur. Partner raporları ve partner yetkililerinin durumlarını izleyebileceğiniz, otomatik partner yapabileceğiniz bir bottur.
              </p>
              <ul className="mb-8 text-lg text-slate-300">
                <li className="mb-2 flex items-center gap-1.5">
                  <HiOutlineShieldCheck className="h-7 w-7 text-red-500" />
                  <p>Hızlı ve güvenilir</p>
                </li>
                <li className="mb-2 flex items-center gap-1.5">
                  <HiOutlineShieldCheck className="h-7 w-7 text-red-500" />
                  <p>Kolayca partnerlik yapın</p>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineShieldCheck className="h-7 w-7 text-red-500" />
                  <p>Anime sunucuları için uygundur</p>
                </li>
              </ul>
              <div className="flex gap-3">
                <a
                  href="/invite"
                  target="_blank"
                  className="rounded bg-red-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-red-800"
                >
                  Sunucuna Ekle
                </a>
                <Link
                  href="/docs/introduction/getting-started"
                  className="rounded bg-slate-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-slate-800"
                >
                  Dökümanlar
                </Link>
              </div>
            </div>
            <div className="aspect-video lg:w-1/2">
              <Image
                src={imageBanner}
                alt="Banner - Menfis"
                className=" w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="lg:mx-24">
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl font-semibold text-slate-200 lg:text-3xl">
                  Kolayca Partnerlik Yap
                </h1>
                <p className="mb-2">
                  Anime sunucunda Menfis&apos;i kullanarak kolayca partnerlik yapabilirsin! Tek yapman gereken Menfis&apos;i <a href="/invite" className="font-semibold text-red-500" target="_blank">
                    sunucuna davet
                  </a> etmen.
                </p>
              </div>
              <div className="h-fit w-fit">
                <Image
                  src={imageKolaycaPartner}
                  alt="Kolayca Partner Yap - Menfis"
                  className="h-full w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl font-semibold text-slate-200 lg:text-3xl">
                  Partner Textini Ayarla
                </h1>
                <p className="mb-2">
                  Partner textini ayarlayarak kolayca partnerlik yapıcağın yetkiliye iletebilirsin!
                </p>
              </div>
              <div className="h-fit w-fit">
                <Image src={imagePartnerText} alt="Partner Text Ayarla - Menfis" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl font-semibold text-slate-200 lg:text-3xl">Yetkili Lider Tablosu</h1>
                <p className="mb-2">
                  Sunucundaki partner yetkililerinin yaptığı partner sayılarına ve yetkili sıralamalarına bakabilirsin.
                </p>
              </div>
              <div className="h-fit w-fit">
                <Image src={imageYetkiliLider} alt="Yetkili Lider Tablosu - Menfis" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-16">
              <div className="max-w-prose">
                <h1 className="mb-4 text-2xl font-semibold text-slate-200 lg:text-3xl">Davet Et</h1>
                <p className="mb-2">
                  Menfis&apos;i <span className="rounded bg-red-700 px-1 py-1 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-red-800">/davet</span> komuduyla sunucuna davet edebilirsin!
                </p>
              </div>
              <div className="h-fit w-fit">
                <Image src={imageDavet} alt="Davet Et - Menfis" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mb-6 bg-gradient-to-tl from-yellow-500 via-orange-500 to-red-500 bg-300% bg-clip-text text-center text-3xl font-bold text-transparent motion-safe:animate-gradient">
              Sende kolayca partner yap!
            </h2>
            <a
              href="/invite"
              target="_blank"
              className="mb-2 rounded bg-red-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-red-800"
            >
              Sunucuna Ekle
            </a>
            {/* <p>Doitdoitdoitdoit.</p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
