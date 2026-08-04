import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  offsetClass?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className,
  offsetClass,
}) => {
  return (
    <div
      className={cn(
        "group cursor-pointer flex flex-col items-center",
        offsetClass,
        className
      )}
    >
      <div className="relative aspect-[3/4] w-full mb-4 overflow-hidden bg-surface-container shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
      </div>
      <div className="text-center px-2">
        <h3 className="font-playfair text-xl md:text-2xl text-on-surface mb-1 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="font-manrope text-xs uppercase tracking-widest text-outline">
          {service.category}
        </p>
      </div>
    </div>
  );
};
