import MarqueeBanner from '@/components/ui/MarqueeBanner';

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-[#FFFAEF]">
      <MarqueeBanner
        text="♪ loading up dreams ✦ built in vijayawada ✦ projects shipped: 10+ ✦ neo brutal since 2026 ✦"
        colorClass="bg-[#C0A0FF]"
        speedSec={112}
      />

      <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center font-mono text-[11px] sm:text-xs font-bold text-[#141111]/80 gap-3 sm:gap-4 text-center sm:text-left">
        <span>© 2026 Zaggu</span>
        <span>K. Jagadish Sai Ram · Amrita Vishwa Vidyapeetham</span>
      </div>
    </footer>
  );
}
