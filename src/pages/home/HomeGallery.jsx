import React from "react";
import gallery1 from "../../assets/1.png";
import gallery2 from "../../assets/2.png";
import gallery3 from "../../assets/gallery/r33.png";
import r32 from "../../assets/gallery/r32.png";
import r31 from "../../assets/gallery/r31.png";

import gallery6 from "../../assets/6.png";
import gallery7 from "../../assets/7.png";

import r21 from "../../assets/gallery/r21.png";
import r11 from "../../assets/gallery/r11.png";
import gallery11 from "../../assets/11.png";

import pdf from "../../assets/broucher.pdf";
import { Link } from "react-router-dom";

const HomeGallery = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16 text-center">
      <p className="text-center text text-xl italic font-bold text-gray-300 mb-8">
        GALLERY
      </p>

      <div className="grid grid-cols-4 gap-4 mx-auto max-w-6xl">
        <div className="col-span-2 h-[150px] group overflow-hidden rounded-lg">
          <img
            src={gallery1}
            alt="Gallery 1"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="col-span-1 h-[150px] group overflow-hidden rounded-lg">
          <img
            src={gallery11}
            alt="Gallery 2"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="col-span-1 h-[150px] group overflow-hidden rounded-lg">
          <img
            src={gallery2}
            alt="Gallery 3"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="col-span-1 h-[250px] group overflow-hidden rounded-lg">
          <img
            src={r32}
            alt="Gallery 4"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="col-span-2 h-[250px] group overflow-hidden rounded-lg">
          <img
            src={r21}
            alt="Main Gallery"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="col-span-1 h-[250px] group overflow-hidden rounded-lg">
          <img
            src={gallery3}
            alt="Gallery 5"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
          <img
            src={gallery6}
            alt="Gallery 6"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
          <img
            src={gallery7}
            alt="Gallery 7"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
          <img
            src={r31}
            alt="Gallery 8"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="col-span-1 h-[120px] group overflow-hidden rounded-lg">
          <img
            src={r11}
            alt="Gallery 9"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-6">
        <Link
          to="gallery"
          className="border-2 text text-base border-white px-6 py-2 md:text-lg font-normal hover:bg-white hover:text-black transition"
        >
          VIEW MORE
        </Link>
        <a
          href={pdf}
          download="Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 text text-base border-white px-6 py-2 md:text-lg font-normal hover:bg-white hover:text-black transition"
        >
          BROCHURE
        </a>
      </div>
    </section>
  );
};

export default HomeGallery;
