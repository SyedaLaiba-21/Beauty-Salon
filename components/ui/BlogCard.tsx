import React from "react";
import Image from "next/image";
import { BlogPost } from "@/types";
import { FiArrowRight } from "react-icons/fi";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group flex flex-col bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-primary/90 text-on-primary font-manrope text-[10px] font-bold uppercase tracking-widest px-3 py-1">
          {post.category}
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between font-manrope text-xs text-outline mb-3">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-playfair text-xl md:text-2xl text-primary mb-3 leading-snug group-hover:text-primary-container transition-colors">
          {post.title}
        </h3>
        <p className="font-manrope text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
          {post.excerpt}
        </p>
        <a
          href="#blog"
          className="inline-flex items-center gap-2 font-manrope text-xs font-semibold uppercase tracking-wider text-primary group-hover:gap-3 transition-all"
        >
          <span>READ ARTICLE</span>
          <FiArrowRight />
        </a>
      </div>
    </article>
  );
};
