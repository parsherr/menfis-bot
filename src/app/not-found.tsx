import Link from "next/link";

export default async function NotFound() {
  return (
    <>
      {/* https://github.com/vercel/next.js/issues/45620 */}
      <title>404 · Menfis</title>

      <div className="mx-4 mt-8 flex items-center justify-center">
        <div className="w-full max-w-prose text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-200">404</h1>
          <p className="mb-8 text-lg">Sayfa bulunamadı!</p>
          <Link
            href="/"
            className="rounded bg-slate-700 px-6 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:bg-slate-800"
          >
            Geri Dön
          </Link>
        </div>
      </div>
    </>
  );
}
