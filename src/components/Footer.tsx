"use client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import IconLink from "./IconLink";

interface CvDocument {
  _id: string;
  _type: "cv";
  title: string;
  fileUrl: string;
}
const Footer = () => {
  const [contactData, setContactData] = useState<CvDocument>();

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "contact"][0]{
        title,
        "fileUrl": cvFile.asset->url
      }`;
      const result: CvDocument = await client.fetch(query);
      setContactData(result);
    };

    fetchData();
  }, []);

  const memoContactData: CvDocument | undefined = useMemo(
    () => contactData,
    [contactData]
  );
  return (
    <>
      <div className="w-full text-lg flex md:justify-evenly my-5 flex-wrap">
        <div className="">Copyright 2024 - Karsten Tauchert</div>
        <Link
          className="flex items-center text-cyan-600 hover:text-orange-500"
          href={"mailto:developer@ktauchert.de"}
        >
          developer@ktauchert.de
        </Link>{" "}
        <div className="">
          {memoContactData && (
            <IconLink
              icon="cv"
              text="Lebenslauf"
              url={memoContactData.fileUrl as string}
              customClasses="text-lg"
            />
          )}
        </div>
        <Link
          className="flex items-center text-cyan-600 hover:text-orange-500"
          href={"impressum"}
        >
          Impressum & Datenschutz
        </Link>
      </div>
    </>
  );
};

export default Footer;
