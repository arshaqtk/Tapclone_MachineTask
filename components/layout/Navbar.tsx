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
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0d0b] border-b border-white/5">

            {/* Main Bar */}
            <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[65px] h-[70px] sm:h-[85px] lg:h-[116px]">

                {/* LEFT — Logo */}
                <Link href="/" className="flex items-center shrink-0" style={{ gap: "10px" }}>
                    <div className="relative w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] lg:w-[72px] lg:h-[72px] shrink-0">
                        <Image
                            src="/ABC_Technologies.logo.png"
                            alt="ABC Technologies Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <span className="text-white"
                            style={{
                                fontFamily: "var(--font-nunito-sans)",
                                fontWeight: 500,
                                fontSize: "clamp(22px, 3vw, 40px)",
                                lineHeight: "100%",
                                letterSpacing: "0px",
                            }}
                        >
                            ABC
                        </span>
                        <span
                            style={{
                                fontFamily: "var(--font-nunito-sans)",
                                fontWeight: 500,
                                fontSize: "clamp(9px, 1vw, 13px)",
                                lineHeight: "100%",
                                letterSpacing: "3px",
                                color: "#9ca3af",
                                textTransform: "uppercase",
                                marginTop: "4px",
                            }}
                        >
                            Technologies
                        </span>
                    </div>
                </Link>

                {/* CENTER — Desktop Nav Links */}
                <ul className="hidden md:flex items-center"
                    style={{ gap: "clamp(16px, 2vw, 28px)", listStyle: "none", margin: 0, padding: 0 }}
                >
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-[#9ca3af] hover:text-white transition-colors duration-200"
                                style={{
                                    fontFamily: "var(--font-nunito-sans)",
                                    fontWeight: 500,
                                    fontSize: "clamp(13px, 1.2vw, 16px)",
                                    lineHeight: "100%",
                                    letterSpacing: "0px",
                                    textTransform: "uppercase",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* RIGHT — Desktop Contact Button */}
                <Link
                    href="#contact"
                    className="hidden md:flex items-center justify-center hover:bg-[#447544]/10 transition-all duration-300 shrink-0"
                    style={{
                        width: "clamp(120px, 10vw, 152px)",
                        height: "clamp(36px, 3vw, 41px)",
                        borderRadius: "4px",
                        border: "1px solid #447544",
                        fontFamily: "var(--font-nunito-sans)",
                        fontWeight: 500,
                        fontSize: "clamp(12px, 1vw, 16px)",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        textTransform: "uppercase",
                        color: "#ffffff",
                        whiteSpace: "nowrap",
                    }}
                >
                    CONTACT US
                </Link>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 shrink-0"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="block bg-white transition-all duration-300"
                        style={{
                            width: "24px", height: "2px", borderRadius: "2px",
                            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                        }}
                    />
                    <span className="block bg-white transition-all duration-300"
                        style={{
                            width: "24px", height: "2px", borderRadius: "2px",
                            opacity: menuOpen ? 0 : 1,
                        }}
                    />
                    <span className="block bg-white transition-all duration-300"
                        style={{
                            width: "24px", height: "2px", borderRadius: "2px",
                            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                        }}
                    />
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
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
                            className="flex items-center text-[#9ca3af] hover:text-white hover:bg-white/5 transition-all duration-200"
                            style={{
                                fontFamily: "var(--font-nunito-sans)",
                                fontWeight: 500,
                                fontSize: "14px",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                padding: "14px 20px",
                                borderBottom: index < navLinks.length - 1
                                    ? "1px solid rgba(255,255,255,0.05)"
                                    : "none",
                            }}
                            onClick={() => setMenuOpen(false)}
                        >
                            <span style={{
                                width: "5px", height: "5px",
                                borderRadius: "50%",
                                background: "#447544",
                                marginRight: "12px",
                                flexShrink: 0,
                            }} />
                            {link.label}
                        </Link>
                    ))}

                    {/* Mobile Contact Button */}
                    <div className="px-5 pt-4">
                        <Link
                            href="#contact"
                            className="flex items-center justify-center w-full hover:bg-[#447544]/10 transition-all duration-300"
                            style={{
                                height: "46px",
                                borderRadius: "4px",
                                border: "1px solid #447544",
                                fontFamily: "var(--font-nunito-sans)",
                                fontWeight: 500,
                                fontSize: "14px",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                color: "#ffffff",
                            }}
                            onClick={() => setMenuOpen(false)}
                        >
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}