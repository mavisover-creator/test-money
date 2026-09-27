import Link from "next/link";
import ContactForm from "./components/ContactForm";
import MoneyOracle from "./components/MoneyOracle";
import Parallax from "./components/Parallax";
import SectionTitle from "./components/SectionTitle";
import { courses } from "./courses/data";

const benefits = [
  { icon: "🌿", title: "釋放金錢焦慮", text: "看見並鬆開內在對金錢的恐懼與匱乏感，讓心回到平靜。" },
  { icon: "💛", title: "修復金錢關係", text: "重新和金錢建立友善的連結，允許自己值得被豐盛對待。" },
  { icon: "✨", title: "啟動豐盛能量", text: "透過靈氣練習，讓能量流動起來，把豐盛帶進日常生活。" },
  { icon: "🌙", title: "每天都能練習", text: "簡單好上手的自我練習，在家就能持續滋養你的能量。" },
];

const faqs = [
  { q: "完全沒有靈氣基礎也可以上課嗎？", a: "當然可以！初階課程就是為零基礎的你設計的，拉拉老師會一步一步帶你認識。" },
  { q: "上完課就會馬上變有錢嗎？", a: "金錢靈氣著重在療癒你與金錢的關係、調整內在狀態，並不保證任何財務結果。真正的改變來自持續的練習與行動。" },
  { q: "課程是實體還是線上？", a: "目前提供實體與線上兩種方式，詳細時間與地點請透過下方表單詢問。" },
  { q: "需要準備什麼東西？", a: "只需要帶著一顆開放的心，穿著舒適的衣服就可以了。" },
];

export default function Home() {
  return (
    <main>
        {/* 主視覺 */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gold-100 via-gold-50 to-background">
          {/* 最遠層：大光暈，移動最慢 */}
          <Parallax speed={0.6} className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-300/30 blur-3xl" />
            <div className="absolute -right-10 top-40 h-96 w-96 rounded-full bg-gold-100/80 blur-3xl" />
          </Parallax>
          {/* 中間層：星星 */}
          <Parallax speed={0.35} className="pointer-events-none absolute inset-0">
            <span className="animate-shimmer absolute left-[10%] top-[20%] text-2xl text-gold-300">✦</span>
            <span className="animate-shimmer absolute right-[15%] top-[15%] text-3xl text-gold-300 [animation-delay:1s]">✦</span>
            <span className="animate-shimmer absolute left-[20%] top-[70%] text-xl text-gold-300 [animation-delay:2s]">✦</span>
            <span className="animate-shimmer absolute right-[10%] top-[65%] text-2xl text-gold-300 [animation-delay:1.5s]">✦</span>
          </Parallax>
          {/* 最近層：金幣，移動比捲動還快 */}
          <Parallax speed={-0.25} className="pointer-events-none absolute inset-0">
            <span className="absolute left-[6%] top-[55%] text-4xl opacity-70">🪙</span>
            <span className="absolute right-[7%] top-[35%] text-5xl opacity-60">💰</span>
            <span className="absolute left-[80%] top-[85%] text-3xl opacity-70">🪙</span>
          </Parallax>
          <Parallax
            speed={0.3}
            className="relative"
            innerClassName="mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:py-32"
          >
            <div className="animate-float flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-5xl shadow-xl shadow-gold-300/50">
              🪙
            </div>
            <p className="mt-8 tracking-[0.3em] text-gold-700">MONEY REIKI</p>
            <h1 className="mt-4 font-cute text-4xl leading-tight text-gold-900 sm:text-6xl">
              讓豐盛，自然流向你
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
              跟著拉拉老師，用溫柔的靈氣能量療癒你與金錢的關係，
              <br className="hidden sm:block" />
              放下匱乏，迎接屬於你的富足人生。
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#courses"
                className="rounded-full bg-gold-500 px-8 py-4 font-bold text-white shadow-lg shadow-gold-300/50 transition hover:bg-gold-700"
              >
                查看課程
              </a>
              <a
                href="#oracle"
                className="rounded-full bg-white px-8 py-4 font-bold text-gold-700 shadow-lg shadow-gold-300/40 transition hover:bg-gold-50"
              >
                🔮 今日金錢指引
              </a>
              <a
                href="#about"
                className="rounded-full border border-gold-500 px-8 py-4 font-bold text-gold-700 transition hover:bg-gold-100"
              >
                了解更多
              </a>
            </div>
          </Parallax>
        </section>

        {/* 今日金錢指引測驗 */}
        <section id="oracle" className="scroll-mt-20 px-4 py-20">
          <SectionTitle eyebrow="TODAY'S MESSAGE" title="今天金錢給你的指引是？" />
          <p className="-mt-6 mb-10 text-center text-foreground/70">
            深呼吸三次，在心裡想著「金錢」，準備好了就按下按鈕吧 🌟
          </p>
          <MoneyOracle />
        </section>

        {/* 什麼是金錢靈氣 */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24">
          <SectionTitle eyebrow="ABOUT" title="什麼是金錢靈氣？" />
          <p className="mx-auto max-w-2xl text-center text-lg leading-loose text-foreground/80">
            金錢靈氣是一種結合靈氣能量與金錢覺察的療癒方法。
            它幫助我們看見內在關於金錢的信念與情緒，
            透過能量的調和，讓人與金錢的關係變得更輕鬆、更自在。
          </p>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gold-100 bg-white/70 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-4xl">{b.icon}</p>
                <h3 className="mt-4 font-cute text-xl text-gold-900">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/70">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 講師介紹 */}
        <section id="teacher" className="scroll-mt-20 bg-gold-50 py-24">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle eyebrow="TEACHER" title="主講者・拉拉老師" />
            <div className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
              <Parallax speed={-0.06} className="mx-auto w-full max-w-xs">
                <div className="flex aspect-square w-full items-center justify-center rounded-full bg-gradient-to-br from-gold-100 to-gold-300 shadow-xl">
                  <span className="font-cute text-7xl text-gold-700">拉拉</span>
                </div>
              </Parallax>
              <div>
                <h3 className="font-cute text-2xl text-gold-900">嗨，我是拉拉 🌸</h3>
                <p className="mt-6 leading-loose text-foreground/80">
                  我相信，每個人都值得擁有豐盛的人生。金錢不只是數字，
                  它也反映了我們如何看待自己、如何對待生活。
                </p>
                <p className="mt-4 leading-loose text-foreground/80">
                  在我的課堂上，我會用最溫柔、最貼近生活的方式，
                  陪你一起覺察、釋放、再重新出發。
                  希望每一位來上課的你，都能帶著滿滿的能量回家。
                </p>
                <blockquote className="mt-8 border-l-4 border-gold-500 pl-5 font-cute text-lg text-gold-700">
                  「當你允許自己富足，豐盛就會找到你。」
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 視差金句帶 */}
        <section className="relative h-80 overflow-hidden bg-gradient-to-br from-gold-500 to-gold-700 sm:h-96">
          <Parallax speed={0.15} className="pointer-events-none absolute inset-0">
            <span className="absolute left-[8%] top-[10%] text-6xl text-white/20">✦</span>
            <span className="absolute right-[12%] top-[50%] text-8xl text-white/15">✦</span>
            <span className="absolute left-[40%] top-[80%] text-5xl text-white/20">✦</span>
          </Parallax>
          <Parallax speed={-0.12} className="pointer-events-none absolute inset-0">
            <span className="absolute left-[15%] top-[60%] text-4xl">🪙</span>
            <span className="absolute right-[20%] top-[15%] text-5xl">🪙</span>
            <span className="absolute right-[40%] top-[90%] text-3xl">✨</span>
          </Parallax>
          <Parallax speed={0.05} className="relative h-full" innerClassName="flex items-center justify-center px-4">
            <p className="text-center font-cute text-3xl leading-relaxed text-white sm:text-5xl">
              金錢是能量，
              <br />
              愛自己，豐盛就會流動 ✨
            </p>
          </Parallax>
        </section>

        {/* 課程 */}
        <section id="courses" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24">
          <SectionTitle eyebrow="COURSES" title="課程介紹" />
          <div className="grid gap-8 md:grid-cols-3">
            {courses.map((c) => (
              <div
                key={c.name}
                className={`relative flex flex-col rounded-2xl p-8 shadow-sm ${
                  c.featured
                    ? "bg-gradient-to-b from-gold-500 to-gold-700 text-white shadow-xl md:-translate-y-4"
                    : "border border-gold-100 bg-white/80"
                }`}
              >
                {c.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-900 px-4 py-1 text-xs text-gold-100">
                    最受歡迎
                  </span>
                )}
                <p className={`text-sm ${c.featured ? "text-gold-100" : "text-gold-500"}`}>{c.level}</p>
                <h3 className={`mt-2 font-cute text-2xl ${c.featured ? "" : "text-gold-900"}`}>{c.name}</h3>
                <p className={`mt-4 leading-relaxed ${c.featured ? "text-white/85" : "text-foreground/70"}`}>
                  {c.desc}
                </p>
                <ul className="mt-6 grid flex-1 gap-3">
                  {c.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className={c.featured ? "text-gold-100" : "text-gold-500"}>✦</span>
                      {i}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/courses/${c.slug}`}
                  className={`mt-8 rounded-full py-3 text-center font-bold transition ${
                    c.featured
                      ? "bg-white text-gold-700 hover:bg-gold-50"
                      : "border border-gold-500 text-gold-700 hover:bg-gold-100"
                  }`}
                >
                  看課程內容
                </Link>
                <a
                  href="#contact"
                  className={`mt-3 text-center text-sm underline-offset-4 hover:underline ${
                    c.featured ? "text-white/85" : "text-gold-700"
                  }`}
                >
                  直接報名 →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 常見問題 */}
        <section id="faq" className="scroll-mt-20 bg-gold-50 py-24">
          <div className="mx-auto max-w-3xl px-4">
            <SectionTitle eyebrow="FAQ" title="常見問題" />
            <div className="grid gap-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-gold-100 bg-white/80 p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-gold-900">
                    {f.q}
                    <span className="text-gold-500 transition group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-foreground/75">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 報名表單 */}
        <section id="contact" className="mx-auto max-w-2xl scroll-mt-20 px-4 py-24">
          <SectionTitle eyebrow="CONTACT" title="報名與諮詢" />
          <ContactForm />
        </section>
    </main>
  );
}
