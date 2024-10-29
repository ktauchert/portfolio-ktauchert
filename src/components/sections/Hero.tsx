"use client";
import { Typewriter } from "react-simple-typewriter";
// import PortableText from "react-portable-text";
import { client } from "@/sanity/lib/client";
import { Suspense, useEffect, useMemo, useState } from "react";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { useProgress } from "@react-three/drei";
import LoadingBar from "../LoadingBar";
import ThreeScene from "../scene/ThreeScene";
import { motion } from "framer-motion";

type HeroDataType = {
  name: string;
  typewriterWords: string[];
  welcomeMessage: string;
  richContent: PortableTextBlock;
};

export default function HeroPage() {
  // Fetch data in the component
  const [heroData, setHeroData] = useState<HeroDataType>();
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "hero"][0]{
          name,
          typewriterWords,
          welcomeMessage,
          richContent
        }`;

      const result = await client.fetch(query);
      setHeroData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (progress >= 99) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2600);
    }
  }, [progress]);

  const memorizedHeroData = useMemo(() => heroData, [heroData]);
  return (
    <section
      id="hero"
      className="hero min-h-screen flex flex-col items-center lg:flex-row  mb-10 "
    >
      <motion.article
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 3,
          delay: 0,
        }}
        id="welcome"
        className="lg:w-1/2 w-full flex flex-col justify-center items-start font-thin"
      >
        <h1 className="text-center lg:text-left md:text-5xl text-4xl font-normal tracking-tight text-zinc-100 w-full overflow-hidden">
          {memorizedHeroData?.name}
        </h1>

        <div
          id="typewriter-container"
          className="py-10 bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent lg:text-4xl text-3xl animate-[pulse_6s_linear_infinite] text-center lg:text-left w-full"
        >
          {memorizedHeroData && (
            <Typewriter
              words={memorizedHeroData?.typewriterWords ?? [""]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          )}
        </div>

        <p className="welcome-message text-xl py-5 font-thin">
          {memorizedHeroData?.welcomeMessage}
        </p>

        <div className="rich-content text-zinc-100">
          {memorizedHeroData?.richContent && (
            <PortableText value={memorizedHeroData.richContent} />
          )}
        </div>
      </motion.article>
      <article
        id="scene"
        className="lg:w-1/2 w-full flex justify-center items-center"
      >
        <div className="w-full aspect-square ">
          <Suspense fallback={null}>
            {isLoaded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: 0,
                }}
                className="w-full h-full"
              >
                <ThreeScene />
              </motion.div>
            ) : (
              <>
                <LoadingBar progress={progress} />
              </>
            )}
          </Suspense>
        </div>
      </article>
    </section>
  );
}
