import { ReactNode } from "react";
import { HiXCircle, HiInformationCircle, HiLightBulb, HiExclamationCircle } from "react-icons/hi";

export default function Alert({
  title,
  style,
  children,
}: {
  title: string;
  style: "danger" | "note" | "Örnek" | "warning";
  children: ReactNode;
}) {
  return (
    <div
      className={`not-prose w-full rounded-lg bg-opacity-25 px-6 py-4 ${
        style === "danger"
          ? "bg-red-500"
          : style === "note"
          ? "bg-amber-500"
          : style === "Örnek"
          ? "bg-sky-500"
          : "bg-yellow-500"
      }`}
    >
      <span className="mb-0.5 flex items-center gap-1.5">
        {style === "danger" ? (
          <HiXCircle className="h-5 w-5" />
        ) : style === "note" ? (
          <HiInformationCircle className="h-5 w-5" />
        ) : style === "Örnek" ? (
          <HiLightBulb className="h-5 w-5" />
        ) : (
          <HiExclamationCircle className="h-5 w-5" />
        )}
        <h6 className="block font-medium">{title || style.charAt(0).toUpperCase() + style.slice(1)}</h6>
      </span>
      <span>{children}</span>
    </div>
  );
}
