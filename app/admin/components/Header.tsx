'use client';

interface HeaderProps {
  onLogout: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-12 pb-8 border-b border-white/5">
      <h1 className="text-[28px] font-bold text-[#00b050]">Service Management</h1>
      <button
        onClick={onLogout}
        className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-[13px] font-bold"
      >
        Sign Out
      </button>
    </div>
  );
}
