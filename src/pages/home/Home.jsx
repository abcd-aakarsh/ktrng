import React, { useEffect, useRef, useState } from "react";
import bgImg from "../../assets/bgImg2.jpeg";
import aboutImg from "../../assets/kaltaran.jpg";
import Carousel from "./Carousel";
import HomeGallery from "./HomeGallery";
import JoinCommunity from "./JoinCommunity";
import Faqs from "./Faqs";
import { motion } from "framer-motion";
import { TextGenerateEffectDemo } from "./test";
import { FlipWordsDemo } from "./test_flip";

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      await document.fonts.ready;
      const img = new Image();
      img.src = bgImg;
      img.onload = () => setIsLoaded(true);
    };

    loadAssets();
  }, []);

  if (!isLoaded) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-black text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-osake animate-pulse drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
          KALTARANG'25
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 animate-bounce">
          Loading the Voxel Verse...
        </p>
      </div>
    );
  }
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[90vh] md:h-[100vh] flex text flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <FadeInSection>
          <div className="relative text  inline-block text-center">
            <span className="absolute -top-6 left-8 drop-shadow-[0_0_15px_rgba(50,50,50,0.8)] text-left text-lg md:text-2xl font-semibold">
              10th Edition
            </span>

            <h1 className="text-4xl md:text-8xl font-bold drop-shadow-[0_0_15px_rgba(10,10,10,0.8)] px-4 relative z-10">
              KALTARANG'25
            </h1>

            <span className="absolute -bottom-10 text-osake right-6 drop-shadow-[0_0_15px_rgba(20,20,20,0.8)] text-xl md:text-3xl font-semibold">
              A Voxel Verse
            </span>
          </div>

          <div className="mt-20">
            <h3 className="text-xl md:text-3xl font-bold  drop-shadow-[0_0_25px_rgba(0,0,0,0.95)] px-4 relative z-10">
              18th April - 20th April
            </h3>
          </div>
        </FadeInSection>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* About Section  */}
      <section className="bg-black text text-white py-16 px-6 lg:px-16 flex flex-col lg:flex-row items-center relative">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black "></div>

        <div className="lg:w-1/2 flex justify-center relative">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-center mb-4">
            About KALTARANG'25
          </h2>
          <motion.p
            className="text-gray-300 text-sm md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Kaltarang is RGIPTs annual cultural fest, renowned for being a
            dynamic and immersive celebration of art, culture, and talent. Since
            its inception, Kaltarang has grown into a prestigious platform where
            creativity meets competition. The 10th edition, Kaltarang25,
            promises to be the grandest yet, bringing together students from
            across the country to experience a world where fantasy and tradition
            intertwine. With a diverse array of competitions, performances, and
            workshops, Kaltarang celebrates the spirit of youth and innovation.
          </motion.p>
          {/* <p>{TextGenerateEffectDemo()}</p> */}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      </section>

      {/* Discover More / Carousel Section */}
      <section className="bg-black text text-white py-16 px-6 md:px-16">
        <FadeInSection>
          <h2 className="text-4xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-center mb-8">
            DISCOVER MORE
          </h2>
          {/* <h2 className="text-4xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-center mb-8">
            {FlipWordsDemo()}
          </h2> */}
          <p className="text-center text-xl italic text-gray-300 mb-8">
            Past Events
          </p>
        </FadeInSection>

        <FadeInSection>
          <Carousel />
        </FadeInSection>
      </section>

      {/* Home Gallery */}
      <FadeInSection>
        <HomeGallery />
      </FadeInSection>

      {/* Join Community */}
      <FadeInSection>
        <JoinCommunity />
      </FadeInSection>

      {/* FAQs */}
      <FadeInSection>
        <Faqs />
      </FadeInSection>
    </>
  );
};

export default Home;
