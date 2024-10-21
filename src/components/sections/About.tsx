"use client";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

import { urlFor } from "@/sanity/lib/imgBuilder";

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

const AboutPage = (props: Props) => {
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
      console.log(result);
    };

    fetchData();
  }, []);

  const memoAboutData = useMemo(() => aboutData, [aboutData]);

  return (
    <section id="about" className="min-h-screen">
      <div className="page-title">
        <h2>About</h2>
      </div>
      <div className="page-content">
        <div id="profile-image">
          {memoAboutData?.profilePicture && (
            <Image
              src={urlFor(memoAboutData?.profilePicture).url()}
              width={1024}
              height={1442}
              alt={"Profile Picture"}
            />
          )}
        </div>
        <article id="profile-info">
          <div className="info-wrapper">
            <h3 className="info-header">Hintergrund</h3>
            <div className="info-body">
              {memoAboutData?.background && (
                <div className="info-body__content">
                  {memoAboutData.background.map((entry) => (
                    <div>{entry}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="info-wrapper">
            <h3 className="info-header">Interessen</h3>
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
            <h3 className="info-header">Skills und Hobbies</h3>
            <div className="info-body">
              {memoAboutData?.skills && (
                <PortableText value={memoAboutData?.skills} />
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
