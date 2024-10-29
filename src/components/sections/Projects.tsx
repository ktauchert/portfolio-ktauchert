"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useMemo, useState } from "react";
import ProjectInfoCard from "../ProjectInfoCard";

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
  projectLink: string;
  description: string;
  stack: string[];
};

const Projects = () => {
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
    };

    fetchData();
  }, []);

  const memoProjectsData = useMemo(() => projectsData, [projectsData]);

  return (
    <section id="projects" className="min-h-screen mb-10">
      <div className="page-title w-full">
        <h2 className="text-center text-4xl text-orange-600 text-bold uppercase tracking-wider my-20 font-bold">
          Projekte
        </h2>
      </div>
      <div className="page-content flex w-full flex-wrap justify-evenly">
        {memoProjectsData
          ?.sort((a, b) => b.year - a.year)
          .map((project, idx) => {
            return (
              <ProjectInfoCard
                index={idx}
                key={`project-${idx}`}
                title={project.title}
                image={project.image}
                year={project.year}
                link={project.projectLink}
                description={project.description}
                stack={project.stack}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Projects;
