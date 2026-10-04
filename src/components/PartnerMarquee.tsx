import React, { useEffect, useRef } from 'react';

export interface Partner {
  name: string;
  logo: string;
}

interface PartnerMarqueeProps {
  partners: Partner[];
  speed?: number; // Số pixel di chuyển mỗi giây
}

export default function PartnerMarquee({
  partners,
  speed = 30,
}: PartnerMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const cycleWidth = useRef(0);
  const hovered = useRef(false);
  const focused = useRef(false);
  const dragging = useRef(false);
  const lastPointerX = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;

    if (!viewport || !group || partners.length === 0) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    // Luôn cuộn trong bản sao ở giữa để kéo được cả hai phía.
    const normalizeScroll = () => {
      const width = cycleWidth.current;
      if (!width) return;

      const position =
        ((viewport.scrollLeft - width) % width + width) % width;

      viewport.scrollLeft = width + position;
    };

    const measure = () => {
      const oldWidth = cycleWidth.current;
      const position = oldWidth
        ? ((viewport.scrollLeft - oldWidth) % oldWidth + oldWidth) %
          oldWidth
        : 0;

      cycleWidth.current = group.getBoundingClientRect().width;
      viewport.scrollLeft =
        cycleWidth.current + (position % cycleWidth.current);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(group);
    measure();

    let frameId = 0;
    let previousTime: number | null = null;

    const animate = (time: number) => {
      const seconds =
        previousTime === null
          ? 0
          : Math.min((time - previousTime) / 1000, 0.05);

      previousTime = time;

      const paused =
        hovered.current ||
        focused.current ||
        dragging.current ||
        reducedMotion.matches ||
        document.hidden;

      if (!paused) {
        viewport.scrollLeft += Math.max(0, speed) * seconds;
        normalizeScroll();
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [partners, speed]);

  const normalizeScroll = () => {
    const viewport = viewportRef.current;
    const width = cycleWidth.current;

    if (!viewport || !width) return;

    viewport.scrollLeft =
      width + (((viewport.scrollLeft - width) % width + width) % width);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    event.currentTarget.style.cursor = 'grab';
  };

  if (partners.length === 0) return null;

  return (
    <section className="bg-[#EAF5FC] py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          Đối tác
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Đồng hành cùng Matrix Holding
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          Sự tin tưởng của các thương hiệu là động lực để chúng tôi
          tiếp tục kiến tạo những giá trị kinh doanh bền vững.
        </p>

        <div className="mb-6 mt-8 flex items-center gap-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500 sm:text-xs">
            Tự động trượt · Rê chuột để dừng và kéo xem thêm
          </p>

          <div className="hidden h-px flex-1 bg-slate-300/60 sm:block" />
        </div>

        <div
          ref={viewportRef}
          tabIndex={0}
          role="region"
          aria-label="Logo đối tác. Dùng phím trái và phải để xem thêm."
          onMouseEnter={() => {
            hovered.current = true;
          }}
          onMouseLeave={() => {
            hovered.current = false;
          }}
          onFocus={() => {
            focused.current = true;
          }}
          onBlur={() => {
            focused.current = false;
          }}
          onKeyDown={(event) => {
            if (
              event.key !== 'ArrowLeft' &&
              event.key !== 'ArrowRight'
            ) {
              return;
            }

            event.preventDefault();
            event.currentTarget.scrollLeft +=
              event.key === 'ArrowRight' ? 180 : -180;

            normalizeScroll();
          }}
          onPointerDown={(event) => {
            if (event.pointerType === 'mouse' && event.button !== 0) {
              return;
            }

            dragging.current = true;
            lastPointerX.current = event.clientX;

            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.style.cursor = 'grabbing';
          }}
          onPointerMove={(event) => {
            if (!dragging.current) return;

            const distance = event.clientX - lastPointerX.current;
            lastPointerX.current = event.clientX;

            event.currentTarget.scrollLeft -= distance;
            normalizeScroll();
          }}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={() => {
            dragging.current = false;

            if (viewportRef.current) {
              viewportRef.current.style.cursor = 'grab';
            }
          }}
          className="
            partner-marquee flex cursor-grab select-none
            overflow-x-auto rounded-2xl
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-sky-500
          "
          style={{ touchAction: 'pan-y' }}
        >
          {/* Ba bản giống nhau giúp vòng lặp không bị đứt */}
          {[0, 1, 2].map((copy) => (
            <div
              key={copy}
              ref={copy === 1 ? groupRef : undefined}
              aria-hidden={copy !== 1 ? true : undefined}
              className="
                flex min-w-full shrink-0 items-center
                gap-4 pr-4 sm:gap-5 sm:pr-5
              "
            >
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="
                    flex h-28 w-40 shrink-0 items-center justify-center
                    rounded-2xl border border-white/80 bg-white
                    px-5 shadow-[0_6px_24px_rgba(10,25,47,0.035)]
                    transition-all duration-200
                    hover:border-sky-200 hover:shadow-md
                    sm:h-32 sm:w-48
                  "
                >
                  <img
                    src={partner.logo}
                    alt={copy === 1 ? partner.name : ''}
                    draggable={false}
                    loading="lazy"
                    className="max-h-20 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
