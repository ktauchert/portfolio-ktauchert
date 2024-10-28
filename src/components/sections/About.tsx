"use client";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/imgBuilder";


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
interface SanityBlock {
  _type: string;
  _key: string;
  style?: string;
  list?: string;
  children?: SanityBlock[];
  markDefs?: {
    _key: string;
    _type: string;
    href?: string;
  }[];
  text?: string;
  asset?: {
    _ref: string;
    _type: string;
  };
}
interface AboutDataType {
  profilePicture: SanityImage;
  background: string[];
  interests: string;
  short: string;
  skills: SanityBlock;
}

const AboutPage = () => {
  const [aboutData, setAboutData] = useState<AboutDataType>();

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "about"][0]{
        profilePicture,
        background,
        interests,
        short,
        skills
      }`;
      const result = await client.fetch(query);
      setAboutData(result);
    };

    fetchData();
  }, []);

  const memoAboutData = useMemo(() => aboutData, [aboutData]);

  return (
    <section id="about" className="min-h-screen snap-start">
      <div className="page-title w-full">
        <h2 className="text-center text-4xl text-orange-600 text-bold uppercase tracking-wider my-20">
          About <span className="text-orange-500">Me</span>
        </h2>
      </div>
      <div className="page-content flex flex-wrap justify-center items-center w-full overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          variants={{
            visible: {
              x: 0,
              opacity: 1,
            },
            hidden: {
              x: -50,
              opacity: 0,
            },
          }}
          id="profile-image"
          className="w-full lg:w-1/3 flex justify-center items-center mb-20"
        >
          {memoAboutData?.profilePicture && (
            <Image
              src={urlFor(memoAboutData?.profilePicture).url()}
              width={1024}
              height={1442}
              alt={"Profile Picture"}
              className="lg:w-[50%] aspect-auto rounded-2xl max-w-[230px]"
            />
          )}
        </motion.div>
        <motion.article
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          variants={{
            visible: {
              x: 0,
              opacity: 1,
            },
            hidden: {
              x: 50,
              opacity: 0,
            },
          }}
          id="profile-info"
          className="w-full lg:w-2/3"
        >
          <div className="info-wrapper">
            <h3 className="info-header ">Hintergrund</h3>
            <div className="info-body">
              {memoAboutData?.background && (
                <div className="info-body__content">
                  {memoAboutData.background.map((entry, idx) => (
                    <div key={`background-${idx}`}>{entry}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="info-wrapper">
            <h3 className="info-header ">Interessen</h3>
            <div className="info-body">
              {memoAboutData?.interests && (
                <div className="info-body__content">
                  {memoAboutData.interests}
                </div>
              )}
            </div>
          </div>
          <div className="info-wrapper">
            <h3 className="info-header">Kurz</h3>
            <div className="info-body">
              {memoAboutData?.short && (
                <div className="info-body__content">{memoAboutData.short}</div>
              )}
            </div>
          </div>
          <div className="info-wrapper">
            <h3 className="info-header ">Skills und Hobbies</h3>
            <div className="info-body">
              {memoAboutData?.skills && (
                <PortableText value={memoAboutData?.skills} />
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default AboutPage;
