import { type renderToStaticMarkup as reactDomRenderToStaticMarkup } from "react-dom/server";

export default async function renderToStaticMarkup(element: Parameters<typeof reactDomRenderToStaticMarkup>[0]) {
  // https://github.com/vercel/next.js/issues/43810#issuecomment-1341136525
  const { renderToStaticMarkup } = await import("react-dom/server");
  return renderToStaticMarkup(element);
}
