import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const folders = [
  { slug: "Safari", label: "Festa Safari" },
  { slug: "Matias", label: "Batizado Matias" },
  { slug: "Casamento", label: "Casamento" },
  { slug: "Martim", label: "Festa Martim" },
  { slug: "Gatsby", label: "Festa Gatsby" },
  { slug: "Xica", label: "Festa Xica" },
  { slug: "Maria", label: "Festa Maria" },
];

export default function Galeria() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setShowLeftArrow(el.scrollLeft > 10);
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setShowRightArrow(el.scrollLeft < maxScrollLeft - 10);

      const slideWidth = el.scrollWidth / folders.length;
      const idx = Math.round(el.scrollLeft / slideWidth);
      setActiveIndex(Math.min(folders.length - 1, Math.max(0, idx)));
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / folders.length;
    el.scrollTo({ left: slideWidth * i, behavior: "smooth" });
  };

  return (
    <section id="galeria" className="bg-primary-light/30 py-20 relative">
      <div className="w-full text-center overflow-x-hidden">
        <h2 className="font-serif text-4xl font-bold md:text-5xl mb-12">Galeria</h2>

        <div className="relative">
          {showLeftArrow && (
            <button
              type="button"
              aria-label="Ver evento anterior"
              onClick={() => goToSlide(Math.max(0, activeIndex - 1))}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-primary/10 transition hidden md:block"
            >
              <ChevronLeft className="h-10 w-10 text-primary" />
            </button>
          )}

          {showRightArrow && (
            <button
              type="button"
              aria-label="Ver evento seguinte"
              onClick={() => goToSlide(Math.min(folders.length - 1, activeIndex + 1))}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-primary/10 transition hidden md:block"
            >
              <ChevronRight className="h-10 w-10 text-primary" />
            </button>
          )}

          <div ref={scrollRef} className="overflow-x-auto snap-x snap-mandatory scroll-smooth">
            <div className="flex w-max">
              {folders.map(({ slug, label }, pageIndex) => (
                <div
                  key={slug}
                  className="snap-center shrink-0 w-[92vw] md:w-screen px-2 md:px-6"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => {
                      const isFirstPage = pageIndex === 0;
                      const src = `/images/${slug}/${slug.toLowerCase()}${i + 1}.jpg`;
                      return (
                        <div
                          key={i}
                          className="overflow-hidden rounded-xl bg-muted aspect-[4/5]"
                        >
                          <img
                            src={src}
                            alt={`${label} — fotografia ${i + 1}`}
                            width="800"
                            height="1000"
                            loading={isFirstPage ? "eager" : "lazy"}
                            decoding="async"
                            fetchpriority={isFirstPage && i < 3 ? "high" : "auto"}
                            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Navegar entre eventos">
            {folders.map((f, i) => (
              <button
                key={f.slug}
                type="button"
                role="tab"
                aria-label={`Ir para ${f.label}`}
                aria-selected={i === activeIndex}
                onClick={() => goToSlide(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-primary/30 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
