"use client";
import React, { useEffect, useState } from "react";

type Props = {};

const links = ["about", "projects", "career", "contact"];

const Navigation = (props: Props) => {
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
    console.log(document.body.scrollHeight);
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection: string | null = "";
      console.log(
        "screenRatio: ",
        Math.floor(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100
        )
      );
      // console.log(
      //   "screenRation: ",

      //   Math.floor((window.scrollY * 100) / (window.innerHeight * 4))
      // );

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const halfScreen = window.innerHeight / 2;
        //const
        //console.log(window.scrollY, sectionTop);
        //console.log(window.scrollY / window.innerHeight);
        if (window.scrollY >= sectionTop - halfScreen) {
          currentSection = section.getAttribute("id");
          //console.log("currentSection: ", currentSection);
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

  const calcWidthFrom = (screenHeightRatio: number, section: string) => {
    const sectionCount = 4;
    let from = 0;
    switch (section) {
      case "about":
        // 12.5% - 37.5
        from = screenHeightRatio / 37.5;
        break;
      case "projects":
        // > 37.5 -
        from = screenHeightRatio / 62.5;
        break;
      case "career":
        // > 37.5 + 25 =62.5
        from = screenHeightRatio / 82.5;
        break;
      case "contact":
        // > 87.5
        from = screenHeightRatio / 100;
        break;
      default:
        // hero
        from = screenHeightRatio / 12.5;
        break;
    }
  };

  return (
    <nav
      id="navigation"
      className={`fixed top-0 w-full h-16 flex flex-col justify-between bg-zinc-100/20 backdrop-blur-sm items-center`}
    >
      <div className="container w-[1280px] flex justify-between h-full items-center">
        <div
          id="brand-logo"
          //className={` ${activeSection === "hero" ? "text-orange-700" : "text-zinc-100"} transition-all`}
          className={`bg-clip-text text-transparent transition-all text-3xl`}
          style={{
            backgroundImage: `linear-gradient(to right, #06b6d4 ${screenRatio >= 99 ? 100 : screenRatio}%, #fb932c ${screenRatio < 2 ? 0 : screenRatio + 10 > 100 ? 100 : screenRatio + 10}%)`,
          }}
        >
          KTauchert-Dev
        </div>
        <div
          id="nav-links"
          className="flex gap-4 bg-gradient-to-r from-orange-500 via-zinc-500 to-cyan-500 bg-clip-text text-transparent text-2xl my-auto h-full items-center"
        >
          <div
            className={` ${activeSection === "about" ? "text-orange-400" : "text-zinc-100"} transition-all hover:text-orange-400 hover:cursor-pointer`}
          >
            About
          </div>

          <div
            className={` ${activeSection === "projects" ? "text-orange-400" : "text-zinc-100"} transition-all`}
          >
            Projects
          </div>
          <div
            className={` ${activeSection === "career" ? "text-orange-400" : "text-zinc-100"} transition-all`}
          >
            Career
          </div>
          <div
            className={` ${activeSection === "contact" ? "text-orange-400" : "text-zinc-100"} transition-all`}
          >
            Contact
          </div>
        </div>
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
