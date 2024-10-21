"use client";
import { Typewriter } from "react-simple-typewriter";
// import PortableText from "react-portable-text";
import { client } from "@/sanity/lib/client";
import { useEffect, useMemo, useState } from "react";
import { PortableText } from "@portabletext/react";

type NodeType = {
  url: string;
  label: string;
};
type ButtonNode = {
  node: NodeType;
};
type HeroDataType = {
  name: string;
  typewriterWords: string[];
  welcomeMessage: string;
  richContent: any;
};

export default function HeroPage() {
  // Fetch data in the component
  const [heroData, setHeroData] = useState<HeroDataType>({
    name: "",
    typewriterWords: [""],
    welcomeMessage: "",
    richContent: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "hero"][0]{
          name,
          typewriterWords,
          welcomeMessage,
          richContent
        }`;

      const result = await client.fetch(query);
      // console.log(result);
      setHeroData(result);
      // return heroData;
    };
    fetchData();
  }, []);

  const memorizedHeroData = useMemo(() => heroData, [heroData]);
  return (
    <section id="hero" className="hero min-h-screen mt-20">
      <h1>{memorizedHeroData?.name}</h1>

      <div className="typewriter">
        <Typewriter
          words={memorizedHeroData?.typewriterWords ?? []}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>

      <p className="welcome-message">{memorizedHeroData?.welcomeMessage}</p>

      <div className="rich-content">
        {memorizedHeroData?.richContent && (
          <PortableText
            value={memorizedHeroData.richContent}
            
          />
        )}
      </div>
    </section>
  );
}
