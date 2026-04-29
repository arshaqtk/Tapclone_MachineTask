"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "SECTORS", href: "#sectors" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0a0d0b]">

      <div
        className="relative mx-auto w-full max-w-[1680px]"
        style={{
          paddingLeft: "clamp(20px, 3.5vw, 65px)",
          paddingRight: "clamp(20px, 3.5vw, 65px)",
        }}
      >
        <div className="flex h-[70px] items-center justify-between sm:h-[85px] lg:h-[116px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 sm:h-14 sm:w-14 lg:h-24 lg:w-24">
              <Image
                src="/ABC_Technologies.logo.png"
                alt="ABC Technologies Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <span
                className="[font-family:var(--font-nunito-sans)] font-medium leading-none text-white"
                style={{ fontSize: "clamp(20px, 2.7vw, 42px)" }}
              >
                ABC
              </span>
              <span
                className="mt-1 [font-family:var(--font-nunito-sans)] font-medium leading-none tracking-[2.4px] text-white"
                style={{ fontSize: "clamp(8px, 0.9vw, 11px)" }}
              >
                Technologies
              </span>
            </div>
          </Link>

          {/* ── Desktop nav links ── */}
          <ul className="absolute left-1/2 top-1/2 m-0 hidden list-none -translate-x-1/2 -translate-y-1/2 items-center gap-10 p-0 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="[font-family:var(--font-nunito-sans)] text-[14px] font-medium uppercase leading-none whitespace-nowrap text-[#bfc2c5] transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <Link
            href="#contact"
            className="group relative hidden h-12 w-[188px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-[#70A267]/60 text-[14px] font-bold uppercase tracking-[1px] text-white transition-all duration-300 md:flex"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 z-0 border border-white/20 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[16px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
          </Link>

          {/* ── Mobile hamburger ── */}
          <button
            className="flex shrink-0 flex-col items-center justify-center gap-[5px] p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 rounded-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "translate-x-[5px] translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "translate-x-[5px] -translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out md:hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          borderTop: menuOpen ? "1px solid rgba(68,117,68,0.3)" : "none",
        }}
      >
        <div className="flex flex-col bg-[#0a0d0b] pb-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center px-5 py-[14px] [font-family:var(--font-nunito-sans)] text-[14px] font-medium uppercase tracking-[2px] text-[#9ca3af] transition-all duration-200 hover:bg-white/5 hover:text-white"
              style={{
                borderBottom:
                  index < navLinks.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mr-3 h-[5px] w-[5px] shrink-0 rounded-full bg-[#447544]" />
              {link.label}
            </Link>
          ))}

          <div className="px-5 pt-4">
            <Link
              href="#contact"
              className="flex h-[46px] w-full items-center justify-center rounded-[4px] border border-[#447544] [font-family:var(--font-nunito-sans)] text-[14px] font-medium uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#447544]/10"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
