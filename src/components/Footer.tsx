"use client";

import Link from "next/link";
import React from "react";



const Footer = () => {


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
