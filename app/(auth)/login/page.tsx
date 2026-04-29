'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HiMail, HiLockClosed } from 'react-icons/hi';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        window.location.replace('/admin');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
        console.log(err)
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#010504] sm:p-6 lg:p-10 font-sans">
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row bg-[#0a0d0b] border border-white/5 shadow-2xl rounded-2xl overflow-hidden min-h-[600px]">
        
        {/* Left Panel - Brand (Dark) */}
        <div className="w-full md:w-[40%] bg-[#010504] p-10 flex flex-col justify-between border-r border-white/5">
          <div>
            <h1 className="text-[28px] font-bold text-white tracking-tight" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              ABC<span className="text-[#00b050]">.</span> Technologies
            </h1>
            <p className="mt-2 text-[10px] font-bold tracking-[0.2em] text-[#9ca3af] uppercase">
              Global Sourcing & Solutions
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-[14px] leading-relaxed text-[#9ca3af]">
              Access the administrative portal to manage global operations, service portfolios, and project inquiries.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-xl font-bold text-white">30+</p>
                <p className="text-[9px] font-bold tracking-widest text-[#00b050] uppercase">Countries</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">150+</p>
                <p className="text-[9px] font-bold tracking-widest text-[#00b050] uppercase">Engineers</p>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-[#9ca3af] opacity-50 uppercase tracking-[0.2em]">
            Admin Access Portal
          </div>
        </div>

        {/* Right Panel - Login Form (Lighter Dark) */}
        <div className="w-full md:w-[60%] bg-[#0a0d0b] p-10 lg:p-16 flex flex-col justify-center">
          <div className="max-w-[360px] mx-auto w-full">
            <div className="mb-8">
              <h2 className="text-[24px] font-bold text-white mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Sign In
              </h2>
              <p className="text-[#9ca3af] text-[14px]">Authorized personnel only.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] group-focus-within:text-[#00b050] transition-colors">
                    <HiMail size={20} />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email Address"
                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-[#9ca3af]/40 focus:outline-none focus:border-[#00b050]/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] group-focus-within:text-[#00b050] transition-colors">
                    <HiLockClosed size={20} />
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder:text-[#9ca3af]/40 focus:outline-none focus:border-[#00b050]/50 transition-all"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-[13px] text-center bg-red-400/10 py-2.5 rounded-lg border border-red-400/20">
                   {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[#00b050] hover:bg-[#009040] text-white text-[14px] font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-[#00b050]/20 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Enter Dashboard'}
              </button>
            </form>

            <div className="mt-8 flex justify-between items-center text-[12px]">
               <Link href="/" className="text-[#9ca3af] hover:text-white transition-colors">← Back to Site</Link>
               <span className="flex items-center gap-2 text-[#9ca3af]/40 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00b050]"></div>
                  Server Active
               </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
