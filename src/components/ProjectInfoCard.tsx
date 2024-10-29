"use client";
import { client } from "@/sanity/lib/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    width: string;
    height: string;
    loading: boolean;
    alt: string;
    _type: string;
  };
  alt?: string;
}
type Props = {
  title: string;
  image: SanityImage | null;
  year: number;
  link: string;
  description: string;
  stack: string[];
  index: number;
};

const ProjectInfoCard = ({
  title = "",
  image = null,
  year = 0,
  link = "",
  description = "",
  stack = [""],
  index,
}: Props) => {
  const imageProps = useNextSanityImage(client, image);
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: index + 1,
      }}
      viewport={{ once: true }}
      variants={{
        visible: {
          x: 0,
          opacity: 1,
        },
        hidden: {
          x: 100,
          opacity: 0,
        },
      }}
      className="project-card w-[320px] lg:w-[360px] flex flex-col items-start m-7"
    >
      <h4 className="project-title text-2xl text-cyan-600 self-center mb-5 font-semibold">
        {title}
      </h4>
      <div className="project-image h-[200px] overflow-hidden rounded-md">
        {imageProps ? (
          <Image
            src={imageProps?.src ?? ""}
            width={imageProps?.width}
            height={imageProps?.height}
            alt={title}
            placeholder="empty"
          />
        ) : (
          <div className="w-[320px] lg:w-[360px] h-full bg-zinc-100/20 backdrop-blur-sm flex justify-center items-center">
            No Image
          </div>
        )}
      </div>
      <div className="project-year-link my-3">
        <span>{year}</span>
        {link ? (
          <>
            {" "}
            -{" "}
            <Link
              href={link}
              target="_blank"
              className="text-orange-400 hover:text-cyan-500"
            >
              Project-Link
            </Link>
          </>
        ) : null}
      </div>
      <div className="project-info my-3 text-justify hyphens-auto">
        {description}
      </div>
      <div className="project-stack">
        {stack.map((item, idx) => (
          <span
            key={`stack-${idx}`}
            className="mr-2 rounded bg-zinc-950 px-2 py-1 text-sm font-bold text-cyan-600"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectInfoCard;
