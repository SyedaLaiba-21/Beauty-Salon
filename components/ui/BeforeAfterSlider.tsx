"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronsLeftRight } from "react-icons/fi";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  title,
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {title && (
        <h4 className="font-playfair text-xl text-primary text-center">
          {title}
        </h4>
      )}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm select-none border border-outline-variant/30 shadow-md">
        {/* After Image (Background) */}
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 right-4 bg-primary/80 text-on-primary font-manrope text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 z-10">
          AFTER
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4 bg-primary/80 text-on-primary font-manrope text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 z-10">
            BEFORE
          </div>
        </div>

        {/* Slider Line Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-20 shadow-lg pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary text-on-primary border-2 border-white flex items-center justify-center text-lg shadow-xl">
            <FiChevronsLeftRight />
          </div>
        </div>

        {/* Hidden Range Input overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={handleSliderChange}
          className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
          aria-label="Before and after slider handle"
        />
      </div>
    </div>
  );
};
