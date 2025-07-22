"use client";
import { useEffect, useRef, useState } from "react";

type Tile = {
  title: string;
  subtitle: string;
};

export default function HeroSection() {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);

  // Simulate async API fetching
  useEffect(() => {
    const fetchTiles = async () => {
      const data: Tile[] = [
        {
          title: "Expert CS Services",
          subtitle: "Regulatory & legal compliance simplified for you.",
        },
        {
          title: "Startup & SME Support",
          subtitle: "Guiding businesses through legal structuring & growth.",
        },
        {
          title: "ROC Filings & Secretarial Work",
          subtitle: "Timely filings and advisory for seamless operations.",
        },
      ];
      // Simulate loading delay
      await new Promise((res) => setTimeout(res, 1000));
      setTiles(data);
    };

    fetchTiles();
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container || tiles.length === 0) return;

      currentIndex.current =
        (currentIndex.current + 1) % tiles.length;

      container.scrollTo({
        left: currentIndex.current * container.clientWidth,
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [tiles]);

  return (
    <section className="w-screen h-screen bg-blue-600 text-white flex items-center justify-center overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full flex flex-col justify-center items-center text-center snap-center px-6 sm:px-20"
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 font-montserrat">
              {tile.title}
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl font-montserrat">
              {tile.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
