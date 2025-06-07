"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type EmblaSliderProps = {
  images: string[];
  direction?: "ltr" | "rtl";
  autoplayInterval?: number;
};

export default function EmblaSlider({
  images,
  direction = "ltr",
  autoplayInterval = 3000,
}: EmblaSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction,
    align: "center",
    skipSnaps: false,
  });

  // Autoplay setup
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [emblaApi, autoplayInterval]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef} dir={direction}>
      <div className="flex">
        {images.map((src, idx) => (
          <div className="px-3 slide-items" key={idx}>
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              width={800}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
