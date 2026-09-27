export default function SiteFooter() {
  return (
    <footer className="bg-gold-900 py-10 text-center text-sm text-gold-100">
      <p className="font-cute text-lg">✦ 金錢靈氣 ・ 拉拉老師 ✦</p>
      <p className="mt-3 text-gold-100/60">
        本課程為身心能量療癒練習，不構成任何投資或財務建議。
      </p>
      <p className="mt-2 text-gold-100/60">© {new Date().getFullYear()} 金錢靈氣 Money Reiki</p>
    </footer>
  );
}
