"use client";

import "highlight.js/styles/github-dark.css";
import Highlight from "highlight.js";
import { useEffect } from "react";

export default function Article({ staticMarkup }: { staticMarkup: string }) {
  useEffect(() => Highlight.highlightAll());

  return (
    <section
      className="
      prose prose-invert mt-8
      prose-headings:my-4 prose-headings:text-slate-300
      prose-p:before:hidden prose-p:after:hidden
      prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-300
      prose-code:rounded prose-code:bg-slate-800 prose-code:p-1 prose-code:font-medium
      prose-code:text-slate-200 prose-code:before:hidden prose-code:after:hidden
      prose-hr:my-5"
      dangerouslySetInnerHTML={{ __html: staticMarkup }}
    />
  );
}
