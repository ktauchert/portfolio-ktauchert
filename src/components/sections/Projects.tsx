"use client";
import { client } from "@/sanity/lib/client";
import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import React, { useEffect, useMemo, useState } from "react";
import ProjectInfoCard from "../ProjectInfoCard";

type Props = {};
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
type ProjectsDataType = {
  title: string;
  image: SanityImage;
  year: number;
  link: string;
  description: string;
  stack: string[];
}

const Projects = (props: Props) => {
  const [projectsData, setProjectsData] = useState<ProjectsDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "projects"]{
        title,
        image,
        year,
        projectLink,
        description,
        stack,
      }`;
      const result = await client.fetch(query);
      setProjectsData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  const memoProjectsData = useMemo(() => projectsData, [projectsData]);

  return (
    <section id="projects" className="min-h-screen">
      {
        memoProjectsData?.sort((a,b) => b.year - a.year).map((project) => {
        
          return(
            <ProjectInfoCard title={project.title} image={project.image} year={project.year} link={project.link} description={project.description} stack={project.stack} />
          )
        })
      }
    </section>
  );
};

export default Projects;
