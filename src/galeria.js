import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Galeria() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const folders = ["Safari", "Matias", "Casamento", "Martim", "Gatsby","Xica","Maria"];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setShowLeftArrow(el.scrollLeft > 10);
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setShowRightArrow(el.scrollLeft < maxScrollLeft - 10);
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="galeria" className="bg-primary-light/30 py-20 relative">
      <div className="w-full text-center overflow-x-hidden">
        <h2 className="font-serif text-4xl font-bold md:text-5xl mb-12">Galeria</h2>

        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() =>
                scrollRef.current?.scrollBy({ left: -window.innerWidth, behavior: "smooth" })
              }
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-primary/10 transition hidden md:block"
            >
              <ChevronLeft className="h-10 w-10 text-primary" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() =>
                scrollRef.current?.scrollBy({ left: window.innerWidth, behavior: "smooth" })
              }
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md hover:bg-primary/10 transition hidden md:block"
            >
              <ChevronRight className="h-10 w-10 text-primary" />
            </button>
          )}

          <div ref={scrollRef} className="overflow-x-auto snap-x snap-mandatory scroll-smooth">
            <div className="flex w-max">
              {folders.map((folder, pageIndex) => (
                <div key={pageIndex} className="snap-start shrink-0 w-screen px-6">
                  <div className="grid grid-cols-3 grid-rows-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="overflow-hidden rounded-xl">
                        <img
                          loading="lazy"
                          src={`/images/${folder}/${folder.toLowerCase()}${i + 1}.jpg`}
                          alt={`${folder} ${i + 1}`}
                          className="w-full h-80 md:h-[375px] object-cover opacity-0 transition-all duration-700 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-xl"
                          onLoad={(e) => {
                            e.currentTarget.classList.remove('opacity-0');
                            e.currentTarget.parentElement.classList.remove('bg-muted', 'animate-pulse');
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
