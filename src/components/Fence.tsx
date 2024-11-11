export default function Fence({ language, children }: { language: string; children: string }) {
  return (
    <pre key={language} className={language ? `language-${language}` : "nohighlight"}>
      <code className="!bg-transparent !p-0">{children}</code>
    </pre>
  );
}
