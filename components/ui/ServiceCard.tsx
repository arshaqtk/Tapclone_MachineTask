'use client';

import Link from 'next/link';
import { ServiceCardProps } from '@/types/service';

function ServiceCubeLogo() {
    return (
        <svg
            width="145"
            height="164"
            viewBox="0 0 145 164"
            fill="none"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full"
            aria-hidden="true"
            preserveAspectRatio="xMinYMin meet"
        >
            <title>Green isometric cube logo</title>
            <desc>Layered green geometric mark with mirrored polygon faces.</desc>
            <g opacity="0.7" clipPath="url(#service-card-cube-clip)">
                <path
                    opacity="0.8"
                    d="M68.8536 0L0 45.6301V45.716L53.2422 80.9815L68.8536 70.6167V0Z"
                    fill="#0B9B3E"
                    fillOpacity="0.7"
                />
                <path
                    opacity="0.8"
                    d="M0 116.376L68.8536 161.962V91.346L53.2422 80.9814L0 116.247V116.376Z"
                    fill="#0B9B3E"
                    fillOpacity="0.7"
                />
                <path
                    opacity="0.8"
                    d="M144.459 46.7493L75.6062 1.11926V71.736L91.2606 82.1006L144.459 46.8353V46.7493Z"
                    fill="#0B9B3E"
                    fillOpacity="0.7"
                />
                <path
                    opacity="0.8"
                    d="M75.6062 163.081L144.459 117.451V117.365L91.2606 82.0992L75.6062 92.4638V163.081Z"
                    fill="#0B9B3E"
                    fillOpacity="0.7"
                />
                <path opacity="0.8" d="M0 45.7162V116.247L53.2422 80.9815L0 45.7162Z" fill="#0C9C3F" />
                <path opacity="0.8" d="M144.461 117.365V46.8345L91.261 82.1L144.461 117.365Z" fill="#0C9C3F" />
            </g>
            <defs>
                <clipPath id="service-card-cube-clip">
                    <rect width="144.461" height="163.081" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default function ServiceCard({ service, isActive = false }: ServiceCardProps) {
    const { title, description, href = '#' } = service;

    return (
        <article
            className={`
        group relative flex h-[415px] w-full max-w-[330px] flex-col overflow-hidden rounded-[12px] border
        backdrop-blur-xl transition-all duration-300
        ${isActive ? 'border-white/30' : 'border-white/20 hover:border-white/30'}
      `}
            style={{
                background: 'linear-gradient(90deg, rgba(4, 9, 13, 0.5) 28.37%, rgba(4, 9, 13, 0) 100%)',
                boxShadow: isActive
                    ? '0 18px 42px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.16)'
                    : '0 14px 32px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 24%, rgba(255,255,255,0) 100%)',
                }}
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
                style={{
                    background:
                        'radial-gradient(ellipse at center, rgba(74,153,96,0.18) 0%, rgba(74,153,96,0.05) 42%, rgba(74,153,96,0) 76%)',
                }}
            />
            <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-white/20" />

            <div className="relative z-10 flex h-full flex-col px-5 pb-8 pt-[160px]">
                <div className="absolute right-5 top-5 flex justify-end">
                    <div
                        className="w-[112px] transition-transform duration-300 group-hover:scale-[1.02]"
                        style={{
                            filter: 'drop-shadow(0 14px 24px rgba(0,0,0,0.2))',
                        }}
                    >
                        <ServiceCubeLogo />
                    </div>
                </div>

                <h3
                    className="mb-[22px] text-white"
                    style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '130%',
                        letterSpacing: '0px',
                    }}
                >
                    {title}
                </h3>

                <p
                    className="flex-1 text-[#DAFFF1]/70"
                    style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '155%',
                        letterSpacing: '0px',
                    }}
                >
                    {description}
                </p>

                <Link
                    href={href}
                    className={`
            mt-[22px] flex min-h-[56px] items-center justify-center gap-2 rounded-[12px] border px-6 py-3
            text-sm font-semibold tracking-wide transition-all duration-200
            ${isActive
                            ? 'border-[#2D7E4B] bg-[#2D7E4B] text-white hover:bg-[#348f56]'

                            : 'border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(129,215,151,0.05)_100%)] text-white hover:border-white/40 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(129,215,151,0.08)_100%)]'
                        }
          `}
                    style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: '15px',
                        backdropFilter: 'blur(14px)',
                        boxShadow: isActive
                            ? 'inset 0 1px 0 rgba(255,255,255,0.16), 0 10px 24px rgba(74,153,96,0.22)'
                            : 'inset 0 1px 0 rgba(255,255,255,0.08)',
                    }}
                    aria-disabled={href === '#'}
                >
                    Learn More
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                        <path
                            d="M2 12L12 2M12 2H5M12 2V9"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </article>
    );
}
