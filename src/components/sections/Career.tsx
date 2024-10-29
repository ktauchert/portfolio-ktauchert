"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useMemo, useState } from "react";
import CareerInfo from "../CareerInfo";

type CareerDataType = {
  position: number;
  from: string;
  until: string;
  title: string;
  company: string;
  subjects: string[];
  stack: string[];
};
type CareerData = CareerDataType[];

const Career = () => {
  const [careerData, setCareerData] = useState<CareerData>();

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "career"]{
        position,
        from,
        until,
        title,
        company,
        subjects,
        stack
      }`;
      const result = await client.fetch(query);
      setCareerData(result);
    };

    fetchData();
  }, []);

  const memoCareerData = useMemo(() => careerData, [careerData]);
  return (
    <section id="career" className="min-h-screen mb-10">
      <div className="page-title">
        <h2 className="text-center text-4xl text-orange-600 uppercase tracking-wider my-20 font-bold">
          Karriere
        </h2>
      </div>
      <div className="page-content">
        {memoCareerData
          ?.sort((a, b) => a.position - b.position)
          .map((data, idx) => (
            <CareerInfo
              key={`info-${idx}`}
              from={data.from}
              until={data.until}
              title={data.title}
              company={data.company}
              subjects={data.subjects}
              stack={data.stack}
            />
          ))}
      </div>
    </section>
  );
};

export default Career;
