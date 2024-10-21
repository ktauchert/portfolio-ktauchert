"use client";
import { client } from "@/sanity/lib/client";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import Image from "next/image";
import React from "react";

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
};

const ProjectInfoCard = ({
  title = "",
  image = null,
  year = 0,
  link = "",
  description = "",
  stack = [""],
}: Props) => {
  const imageProps = useNextSanityImage(client, image);
  return (
    <article className="project-card">
      <h4 className="project-title">{title}</h4>
      <div className="project-image">
        <Image
          src={imageProps?.src ?? ""}
          width={imageProps?.width}
          height={imageProps?.height}
          alt={title}
        />
      </div>
      <div className="project-year-link">
        {year} - {link}
      </div>
      <div className="project-info">{description}</div>
      <div className="project-stack">{stack}</div>
    </article>
  );
};

export default ProjectInfoCard;
