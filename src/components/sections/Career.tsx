"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useMemo, useState } from "react";
import CareerInfo from "../CareerInfo";

type CareerDataType = {
  from: string;
  until: string;
  title: string;
  company: string;
  subjects: string[];
  stack: string[];
};
type CareerData = CareerDataType[]

const Career = (props: {}) => {
  const [careerData, setCareerData] = useState<CareerData>();

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "career"]{
        from,
        until,
        title,
        company,
        subjects,
        stack
      }`;
      const result = await client.fetch(query);
      setCareerData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  const memoCareerData = useMemo(() => careerData, [careerData]);
  return (
    <section id="career" className="min-h-screen">
      <div className="page-title">
        <h2>Career</h2>
      </div>
      <div className="page-content">
        {careerData && careerData.map((data, idx) => (
          <CareerInfo from={data.from} until={data.until} title={data.title} company={data.company}subjects={data.subjects} stack={data.stack} />
        ))}
      </div>
    </section>
  );
};

export default Career;
