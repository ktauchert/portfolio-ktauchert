"use client";
import React, { useEffect, useState } from "react";
import Cat from "./logo/CatLogo";
import Link from "next/link";
import { motion } from "framer-motion";


const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [screenRatio, setScreenRatio] = useState(0);

  useEffect(() => {
    setScreenRatio(
      Math.floor(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      )
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection: string | null = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const halfScreen = window.innerHeight / 2;
        if (window.scrollY >= sectionTop - halfScreen) {
          currentSection = section.getAttribute("id");
        }
      });
      setScreenRatio(
        Math.floor(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100
        )
      );
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navigation" className={` ${screenRatio >= 1 ? "scrolling" : ""}`}>
      <div className="max-w-[1280px] w-full flex justify-between h-full items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          className="brand-logo-name flex items-center"
        >
          <Cat scale={0.6} />
          <Link href={`/#`}>
            <span
              id="brand-name"
              className={`bg-clip-text text-transparent transition-all text-3xl`}
              style={{
                backgroundImage: `linear-gradient(to right, #06b6d4 ${screenRatio >= 99 ? 100 : screenRatio}%, #fb932c ${screenRatio < 1 ? 0 : screenRatio + 5 > 100 ? 100 : screenRatio + 5}%)`,
              }}
            >
              KTauchert-Dev
            </span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          id="nav-links"
          className="flex gap-4 bg-gradient-to-r from-orange-500 via-zinc-500 to-cyan-500 bg-clip-text text-transparent text-xl my-auto h-full items-center"
        >
          <Link
            href={"/#about"}
            className={` ${activeSection === "about" ? "text-orange-400" : "text-zinc-100"} transition-all hover:text-orange-400 hover:cursor-pointer`}
          >
            About
          </Link>

          <Link
            href={"/#projects"}
            className={` ${activeSection === "projects" ? "text-orange-400" : "text-zinc-100"} transition-all hover:text-orange-400 hover:cursor-pointer`}
          >
            Projects
          </Link>
          <Link
            href={"/#career"}
            className={` ${activeSection === "career" ? "text-orange-400" : "text-zinc-100"} transition-all hover:text-orange-400 hover:cursor-pointer`}
          >
            Career
          </Link>
          <Link
            href={"/#contact"}
            className={` ${activeSection === "contact" ? "text-orange-400" : "text-zinc-100"} transition-all hover:text-orange-400 hover:cursor-pointer`}
          >
            Contact
          </Link>
        </motion.div>
      </div>
      {/* <div className="bg-cyan-950 h-[3px] w-full">
        <div
          className={`bg-cyan-800 h-[3px]`}
          style={{ width: `${screenRatio}%` }}
        ></div>
      </div> */}
    </nav>
  );
};

export default Navigation;
