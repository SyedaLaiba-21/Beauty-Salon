import React from "react";
import Image from "next/image";
import { TeamMember } from "@/types";
import { FaInstagram, FaFacebook } from "react-icons/fa";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative aspect-[3/4] w-full mb-4 overflow-hidden bg-surface-container border border-outline-variant/20 shadow-sm">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-on-primary text-xl">
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:scale-125 transition-transform"
              aria-label={`${member.name}'s Instagram`}
            >
              <FaInstagram />
            </a>
          )}
          {member.socials.facebook && (
            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:scale-125 transition-transform"
              aria-label={`${member.name}'s Facebook`}
            >
              <FaFacebook />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-playfair text-xl text-primary mb-1">{member.name}</h3>
      <p className="font-manrope text-xs text-outline font-semibold uppercase tracking-wider mb-2">
        {member.role}
      </p>
      <p className="font-manrope text-xs text-on-surface-variant max-w-xs leading-relaxed">
        {member.bio}
      </p>
    </div>
  );
};
