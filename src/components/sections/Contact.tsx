"use client";
import React, { useEffect, useMemo, useState } from "react";
import ContactForm from "../ContactForm";
import { client } from "@/sanity/lib/client";
import IconLink from "../IconLink";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section id="contact" className="min-h-[calc(100vh-160px)] mb-20">
      <div className="page-title w-full">
        <h2 className="text-center text-4xl text-orange-600 text-bold uppercase tracking-wider my-20">
          Contact
        </h2>
      </div>
      <div className="page-content flex flex-col justify-center items-center w-full overflow-hidden">
        <div className="min-w-[50%]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
