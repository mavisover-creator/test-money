export default function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm tracking-[0.3em] text-gold-500">{eyebrow}</p>
      <h2 className="mt-3 font-cute text-3xl text-gold-900 sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-5 h-px w-16 bg-gold-300" />
    </div>
  );
}
