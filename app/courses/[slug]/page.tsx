import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Parallax from "../../components/Parallax";
import SectionTitle from "../../components/SectionTitle";
import { courses, getCourse } from "../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.name}｜金錢靈氣・拉拉老師`,
    description: course.tagline,
  };
}

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const others = courses.filter((c) => c.slug !== course.slug);

  return (
    <main>
      {/* 課程主視覺 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gold-100 via-gold-50 to-background">
        <Parallax speed={0.5} className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-6 h-64 w-64 rounded-full bg-gold-300/30 blur-3xl" />
          <div className="absolute -right-10 top-24 h-80 w-80 rounded-full bg-gold-100/80 blur-3xl" />
        </Parallax>
        <Parallax speed={-0.2} className="pointer-events-none absolute inset-0">
          <span className="animate-shimmer absolute left-[12%] top-[25%] text-2xl text-gold-300">✦</span>
          <span className="animate-shimmer absolute right-[14%] top-[20%] text-3xl text-gold-300 [animation-delay:1s]">✦</span>
          <span className="animate-shimmer absolute right-[22%] top-[75%] text-xl text-gold-300 [animation-delay:2s]">✦</span>
        </Parallax>
        <Parallax
          speed={0.25}
          className="relative"
          innerClassName="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28"
        >
          <Link href="/#courses" className="text-sm text-gold-700 transition hover:text-gold-500">
            ← 回到所有課程
          </Link>
          <p className="mt-8">
            <span className="rounded-full bg-gold-500 px-4 py-1 text-sm text-white">{course.level}</span>
          </p>
          <h1 className="mt-5 font-cute text-4xl text-gold-900 sm:text-5xl">{course.name}</h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/75">{course.tagline}</p>
        </Parallax>
      </section>

      {/* 開場介紹 */}
      <section className="mx-auto max-w-2xl px-4 py-16">
        {course.intro.map((p) => (
          <p key={p} className="mb-5 text-lg leading-loose text-foreground/80">
            {p}
          </p>
        ))}
      </section>

      {/* 適合誰 */}
      <section className="bg-gold-50 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle eyebrow="FOR YOU" title="如果你有這些時刻" />
          <div className="grid gap-4 sm:grid-cols-2">
            {course.forYou.map((f) => (
              <div key={f} className="flex items-start gap-3 rounded-2xl bg-white/80 p-6 shadow-sm">
                <span className="text-gold-500">✦</span>
                <p className="leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 課堂流程 */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <SectionTitle eyebrow="IN CLASS" title="課堂上會做的事" />
        <ol className="relative grid gap-10 border-l-2 border-gold-100 pl-8">
          {course.steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 font-cute text-white shadow-md">
                {i + 1}
              </span>
              <h3 className="font-cute text-xl text-gold-900">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-foreground/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 帶走什麼＋上課資訊 */}
      <section className="bg-gold-50 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-2">
          <div className="rounded-3xl bg-white/85 p-8 shadow-sm">
            <h2 className="font-cute text-2xl text-gold-900">上完課，你會帶走</h2>
            <ul className="mt-6 grid gap-4">
              {course.takeaways.map((t) => (
                <li key={t} className="flex gap-3">
                  <span>🪙</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white/85 p-8 shadow-sm">
            <h2 className="font-cute text-2xl text-gold-900">上課資訊</h2>
            <dl className="mt-6 grid gap-4">
              {course.info.map((i) => (
                <div key={i.label} className="flex justify-between gap-4 border-b border-gold-100 pb-3">
                  <dt className="text-foreground/60">{i.label}</dt>
                  <dd className="text-right font-medium text-gold-900">{i.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 拉拉的話 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gold-500 to-gold-700 py-20">
        <Parallax speed={0.15} className="pointer-events-none absolute inset-0">
          <span className="absolute left-[8%] top-[15%] text-6xl text-white/20">✦</span>
          <span className="absolute right-[10%] top-[55%] text-7xl text-white/15">✦</span>
        </Parallax>
        <div className="relative mx-auto max-w-2xl px-4 text-center text-white">
          <p className="text-sm tracking-[0.3em] text-gold-100">拉拉想對你說</p>
          <p className="mt-6 font-cute text-2xl leading-relaxed sm:text-3xl">「{course.note}」</p>
          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-full bg-white px-10 py-4 font-bold text-gold-700 shadow-lg transition hover:bg-gold-50"
          >
            我想報名這堂課
          </Link>
        </div>
      </section>

      {/* 其他課程 */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <SectionTitle eyebrow="MORE" title="也看看其他課程" />
        <div className="grid gap-6 sm:grid-cols-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/courses/${c.slug}`}
              className="rounded-2xl border border-gold-100 bg-white/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm text-gold-500">{c.level}</p>
              <h3 className="mt-2 font-cute text-2xl text-gold-900">{c.name}</h3>
              <p className="mt-3 leading-relaxed text-foreground/70">{c.desc}</p>
              <p className="mt-5 text-gold-700">看課程內容 →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
