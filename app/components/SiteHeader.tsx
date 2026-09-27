import Link from "next/link";

const nav = [
  { href: "/#about", label: "什麼是金錢靈氣" },
  { href: "/#teacher", label: "拉拉老師" },
  { href: "/#courses", label: "課程" },
  { href: "/#faq", label: "常見問題" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-gold-100 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-cute text-xl font-bold text-gold-700">
          ✦ 金錢靈氣
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition hover:text-gold-500">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-full bg-gold-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-gold-700"
        >
          立即報名
        </Link>
      </div>
    </header>
  );
}
