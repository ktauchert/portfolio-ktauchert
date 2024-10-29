import React from "react";
import { motion } from "framer-motion";
type Props = {
  from: string;
  until: string;
  title: string;
  company: string;
  subjects: string[];
  stack: string[];
};

function CareerInfo({
  from = "Okt. 2000",
  until = "Now",
  title = "Entrepreneur",
  company = " Tha Worldo",
  subjects,
  stack,
}: Props) {
  return (
    <article className="my-10 text-zinc-100-">
      <div className="time-info w-full flex flex-col lg:flex-row">
        <div className="lg:w-1/4 w-full">
          <span className="text-lg text-zinc-100">
            {from} - {until}
          </span>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.5, delay: 0 }}
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
          className="w-full lg:w-3/4"
        >
          <h4 className="career-title text-cyan-400 text-lg font-semibold">
            {title} - <span className="italic text-zinc-100">{company}</span>
          </h4>
          <div className="career-content my-5">
            <ul className="list-disc ml-5 text-lg">
              {subjects &&
                subjects.map((subject, idx) => (
                  <li key={`sitem-${idx}`} className="my-1">
                    {subject}
                  </li>
                ))}
            </ul>
          </div>
          <div className="career-stack">
            <div className="inline-block flex flex-wrap">
              {stack &&
                stack.map((item, idx) => (
                  <span
                    key={`stack-item${idx}`}
                    className="mr-2 rounded bg-zinc-950 px-2 py-1 m-1 text-sm font-semibold text-cyan-600"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export default CareerInfo;
