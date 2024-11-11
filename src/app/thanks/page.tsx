import { Metadata } from "next";
import RemoveParams from "./RemoveParams";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineCheckCircle } from "react-icons/hi2";

import imageSetupCommand from "../../../public/setup-command.png";
import imageReportMessageCommand from "../../../public/report-message-command.png";

export const metadata: Metadata = {
  title: "Menfis'i Davet Ettiğiniz İçin Teşekkürler",
  description: "Menfis ile başlamanız için sonraki adımlara göz atın.",
};

export default async function Thanks() {
  return (
    <main>
      <RemoveParams />
      <div className="mx-4 mt-16 flex items-center justify-center">
        <div className="max-w-5xl">
          <h1 className="mb-2 flex flex-col items-center justify-center gap-1.5 lg:flex-row">
            <HiOutlineCheckCircle className="h-6 w-6 stroke-2 text-orange-500 lg:h-7 lg:w-7" />
            <span className="bg-gradient-to-tl from-yellow-500 via-orange-500 to-red-500 bg-300% bg-clip-text pb-0.5 text-center text-2xl font-semibold text-transparent motion-safe:animate-gradient lg:text-3xl">
              Menfis&apos;i davet ettiğiniz için teşekkürler!
            </span>
          </h1>
          <p className="mb-12 text-center text-lg text-slate-300">
            Sunucunuzda Menfis&apos;i kullanmaya başlamak için neredeyse hazırsınız.
          </p>
          <div className="mb-10 flex w-full flex-col justify-center gap-12 lg:flex-row">
            <div className="rounded-lg bg-yellow-600 bg-opacity-30 p-6 shadow-lg">
              <h2 className="mb-4 text-lg font-semibold text-slate-200">
                Run{" "}
                <span className="rounded-sm bg-[#5764f2] bg-opacity-50 px-0.5 font-medium hover:bg-opacity-80">
                  /kurulum
                </span>{" "}
                to setup reports.
              </h2>
              <Image src={imageSetupCommand} alt="Example of running the /setup command" className="rounded-lg" />
            </div>
            <div className="rounded-lg bg-blue-600 bg-opacity-30 p-6 shadow-lg">
              <h2 className="mb-4 text-lg font-semibold text-slate-200">Then, create a test report!</h2>
              <Image
                src={imageReportMessageCommand}
                alt="Example of running the Report Message command"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mb-12 text-center">
            <Link
              href="/docs/introduction/getting-started"
              className="rounded bg-slate-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-slate-800"
            >
              Docs
            </Link>
          </div>
          <p className="mb-2 text-center">
            If you have any questions, feel free to join our{" "}
            <Link href="/discord" target="_blank" className="text-red-500 underline">
              Discord server
            </Link>{" "}
            for support.
          </p>
          <p className="mb-2 text-center">
            If you enjoy using Reindeer, please consider to{" "}
            <Link href="/vote" target="_blank" className="text-red-500 underline">
              vote
            </Link>{" "}
            and{" "}
            <Link href="/review" target="_blank" className="text-red-500 underline">
              review
            </Link>{" "}
            Reindeer on Top.gg.
          </p>
          <p className="mb-2 text-center text-yellow-500">Menfis&apos;i tercih ettiğiniz için teşekkür ederiz! 💖</p>
        </div>
      </div>
    </main>
  );
}
