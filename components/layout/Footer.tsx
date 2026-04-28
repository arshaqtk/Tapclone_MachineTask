'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

interface FooterProps {
  backgroundSrc?: string;
}

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  { label: 'Global Trading & Export', href: '#trading' },
  { label: 'Technical Consultation &\nEngineering Advisory', href: '#consultation' },
  { label: 'Technology & Solution Delivery', href: '#technology' },
];

export default function Footer({ backgroundSrc }: FooterProps) {
  const resolvedBg = backgroundSrc ?? '/footer-bg.jpg';

  return (
    <footer className="relative isolate overflow-hidden bg-[#010504]">
      {/* Earth Background */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={resolvedBg}
          alt="Earth background"
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-screen"
          style={{ objectPosition: 'center 40%' }}
          priority={false}
        />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(1,5,4,1)_0%,rgba(1,5,4,0.6)_40%,rgba(1,5,4,0)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-10 pt-[100px] sm:px-8 md:pt-[140px] lg:px-14 xl:px-[80px]">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Logo & Branding */}
          <div className="flex flex-col items-start">
            {/* Logo Group */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-16 w-12 shrink-0 lg:h-20 lg:w-14">
                <Image
                  src="/ABC_Technologies.logo.png"
                  alt="ABC Technologies"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[22px] font-medium leading-none text-white tracking-wide lg:text-[24px]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  ABC
                </span>
                <span className="mt-1 text-[10px] font-medium tracking-[2px] text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Technologies
                </span>
              </div>
            </Link>

            <p className="mt-6 text-[14px] font-medium text-[#00b050]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Energy Redefined
            </p>

            <div className="mt-6 text-[13px] leading-relaxed text-[#e5e7eb]/80" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <p>ABC Technologies</p>
              <p>UAE</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-[13px] font-bold uppercase tracking-[0.1em] text-[#f3f4f6]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label} className="flex items-start">
                  <span className="mr-3 mt-[8.5px] h-1 w-1 shrink-0 rounded-full bg-white/40"></span>
                  <Link href={link.href} className="text-[14px] text-[#9ca3af] hover:text-[#00b050] transition-colors" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-[13px] font-bold uppercase tracking-[0.1em] text-[#f3f4f6]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Services
            </h3>
            <ul className="space-y-4">
              {SERVICES.map((link) => (
                <li key={link.label} className="flex items-start">
                  <span className="mr-3 mt-[8.5px] h-1 w-1 shrink-0 rounded-full bg-white/40"></span>
                  <Link href={link.href} className="text-[14px] text-[#9ca3af] hover:text-[#00b050] transition-colors whitespace-pre-line leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-[13px] font-bold uppercase tracking-[0.1em] text-[#f3f4f6]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-3.5 group">
                <span className="text-[#00b050]/80 group-hover:text-[#00b050] transition-colors">
                  <FaPhoneAlt size={16} />
                </span>
                <span className="text-[14px] text-[#9ca3af]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  +971 00 223 0000
                </span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <span className="text-[#00b050]/80 group-hover:text-[#00b050] transition-colors">
                  <FaWhatsapp size={18} />
                </span>
                <span className="text-[14px] text-[#9ca3af]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  +971 00223 0000
                </span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <span className="text-[#00b050]/80 group-hover:text-[#00b050] transition-colors">
                  <IoMail size={18} />
                </span>
                <span className="text-[14px] text-[#9ca3af]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  abc@gmail.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="mt-16 sm:mt-20">
          <hr className="border-white/5" />
          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[12px] text-[#9ca3af]/60 font-medium" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              © 2026 Tapclone | All Rights Reserved
            </p>
            <div className="flex gap-6">
               <Link href="#" className="text-[11px] uppercase tracking-widest text-[#9ca3af]/40 hover:text-[#00b050] transition-colors">Privacy Policy</Link>
               <Link href="#" className="text-[11px] uppercase tracking-widest text-[#9ca3af]/40 hover:text-[#00b050] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
