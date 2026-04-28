'use client';

import { useEffect, useRef, useState } from 'react';

import ServiceCard from '@/components/ui/ServiceCard';
import { ServiceCardSkeleton } from '@/components/ui/serviceCardSkelton';
import { Service, ServicesSectionProps } from '@/types/service';

const SKELETON_CARDS = 4;

export default function ServicesSectionClient({
  services = [],
  heading,
  isLoading = false,
  emptyMessage = 'Services will appear here soon.',
}: ServicesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isLoading || services.length === 0) {
      return;
    }

    const container = scrollRef.current;

    if (!container) {
      return;
    }

    let frameId = 0;

    const updateActiveCard = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        itemRefs.current.forEach((item, index) => {
          if (!item) {
            return;
          }

          const itemRect = item.getBoundingClientRect();
          const itemCenter = itemRect.left + itemRect.width / 2;
          const distance = Math.abs(itemCenter - containerCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex((currentIndex) =>
          currentIndex === closestIndex ? currentIndex : closestIndex
        );
      });
    };

    updateActiveCard();
    container.addEventListener('scroll', updateActiveCard, { passive: true });
    window.addEventListener('resize', updateActiveCard);

    return () => {
      container.removeEventListener('scroll', updateActiveCard);
      window.removeEventListener('resize', updateActiveCard);
      cancelAnimationFrame(frameId);
    };
  }, [isLoading, services]);

  const visibleServices = isLoading ? [] : services;
  const maxIndex = Math.max(visibleServices.length - 1, 0);
  const resolvedActiveIndex = Math.min(hoveredIndex ?? activeIndex, maxIndex);

  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-16 pt-16 md:pb-18 md:pt-18 lg:pb-20 lg:pt-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className="uppercase tracking-widest"
            style={{
              fontFamily: 'Eloran, serif',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 400,
              lineHeight: '120%',
              letterSpacing: '0.08em',
            }}
          >
            <span style={{ color: '#4a9960' }}>OUR&nbsp;</span>
            <span className="text-white">SERVICES</span>
          </h2>
          {heading && (
            <p
              className="mt-3 text-[#DAFFF1]/60"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
              }}
            >
              {heading}
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-[22px] pb-4 sm:grid-flow-col sm:auto-cols-[330px] sm:grid-cols-none sm:overflow-x-auto">
            {Array.from({ length: SKELETON_CARDS }).map((_, index) => (
              <div key={index} className="flex justify-center sm:block">
                <ServiceCardSkeleton />
              </div>
            ))}
          </div>
        ) : visibleServices.length > 0 ? (
          <>
            <div
              ref={scrollRef}
              className="grid grid-cols-1 gap-[22px] pb-4 sm:grid-flow-col sm:auto-cols-[330px] sm:grid-cols-none sm:overflow-x-auto sm:[scrollbar-color:#2e5e3e_transparent] sm:[scrollbar-width:thin]"
            >
              {visibleServices.map((service: Service, index: number) => (
                <div
                  key={service.id}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  className="flex h-full justify-center snap-start sm:block"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                  }}
                  onFocus={() => {
                    setHoveredIndex(index);
                  }}
                  onBlur={() => {
                    setHoveredIndex(null);
                  }}
                >
                  <ServiceCard service={service} isActive={index === resolvedActiveIndex} />
                </div>
              ))}
            </div>

            <div className="mt-6 hidden items-center justify-between gap-4 sm:flex">
              <p
                className="text-[#DAFFF1]/55"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                }}
              >
                Scroll horizontally to explore services.
              </p>

              <div className="flex items-center gap-2">
                {visibleServices.map((service, index) => (
                  <span
                    key={service.id}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === resolvedActiveIndex ? 'w-8 bg-[#4a9960]' : 'w-2 bg-[#244132]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-[#1e3a2a] bg-[#081810] px-6 py-12 text-center">
            <p
              className="text-[#DAFFF1]/70"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
              }}
            >
              {emptyMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
