import React from "react";
import Image from "next/image";
import TestimonialImage from "../images/testimonial.jpg";
import img1 from "../images/image10.png";
import img2 from "../images/image 2.png";
import img3 from "../images/image 30.png";
import img4 from "../images/image 4.png";
import img5 from "../images/image 5.png";
import img6 from "../images/image 6.png";
import img7 from "../images/image 9.png";
import img8 from "../images/image 8.png";
import img9 from "../images/image 12.png";
import imgyc from "../images/img4.png";
import img19 from "../images/img19.png";
import Link from "next/link";
import ReactCSSTransitionGroup from "react-transition-group";
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

function Testimonials() {
  return (
    <>
      <div className="m-5 lg:m-20">
        {/* Section header */}
        <div className="max-w-full mx-auto text-center pb-12 md:pb-8">
          <h2 className="mb-8 text-lg font-semibold">
            Trusted by fintech startups around the world
          </h2>
        </div>
        <div className=" relative w-full p-16 overflow-hidden items-center">
          <div className="flex absolute animate left-0 items-center ">
            <div className=" flex w-1/2 pt-3 lg:w-full justify-around items-center">
              <div className="px-2 pt-5 lg:px-0">
                <Image src={img9} alt="Trove" objectFit="contain" />
              </div>

              <div className="px-2 pt-4 lg:px-0">
                <Image src={img1} alt="Mazuma-Go" objectFit="contain" />
              </div>

              {/* Item */}
              <div className="px-2 pt-5 lg:px-0">
                <Image src={img2} alt="Ziina" objectFit="contain" />
              </div>

              {/* Item */}
              <div className="px-2 pt-5 lg:px-0">
                <Image src={img3} alt="Zywa" objectFit="contain" />
              </div>

              {/* Item */}
              <div className="px-2 pt-3 lg:px-0">
                <Image src={img6} alt="ivella" objectFit="contain" />
              </div>
              <div className="px-2 pt-7 lg:px-0">
                <Image src={img7} alt="Fingo" objectFit="contain" />
              </div>

              <div className="px-2 pt-3 lg:px-0">
                <Image src={img5} alt="Novastar" objectFit="contain" />
              </div>

              <div className="px-2 pt-5 lg:px-0">
                <Image src={img4} alt="Next Pay" objectFit="contain" />
              </div>

              <div className="px-2 pt-3 lg:px-0">
                <Image src={img8} alt="SALT" objectFit="contain" />
              </div>
            </div>
            <div className=" flex w-1/2 pt-3 lg:w-full justify-around items-center">
              <div className="px-2 pt-5 lg:px-0">
                <Image src={img9} alt="Trove" objectFit="contain" />
              </div>

              <div className="px-2 pt-4 lg:px-0">
                <Image src={img1} alt="Mazuma-Go" objectFit="contain" />
              </div>

              {/* Item */}
              <div className="px-2 pt-5 lg:px-0">
                <Image src={img2} alt="Ziina" objectFit="contain" />
              </div>

              {/* Item */}
              <div className="px-2 pt-5 lg:px-0">
                <Image src={img3} alt="Zywa" objectFit="contain" />
              </div>

              {/* Item */}
              <div className="px-2 pt-3 lg:px-0">
                <Image src={img6} alt="ivella" objectFit="contain" />
              </div>
              <div className="px-2 pt-7 lg:px-0">
                <Image src={img7} alt="Fingo" objectFit="contain" />
              </div>

              <div className="px-2 pt-3 lg:px-0">
                <Image src={img5} alt="Novastar" objectFit="contain" />
              </div>

              <div className="px-2 pt-5 lg:px-0">
                <Image src={img4} alt="Next Pay" objectFit="contain" />
              </div>

              <div className="px-2 pt-3 lg:px-0">
                <Image src={img8} alt="SALT" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="flex items-center justify-center col-span-2 md:col-auto ">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ycombinator.com/companies/flagright"
        >
          <Image
            className="relative opacity-70"
            src={imgyc}
            width={60}
            height={60}
            alt="Y Combinator"
          />
        </a>
        <a
          target="_blank"
          href="https://www.ycombinator.com/companies/flagright"
          rel="noopener noreferrer"
          className="block font-bold text-lg not-italic mb-1 ml-5"
        >
          Backed by Y Combinator
        </a>
      </div>
    </>
  );
}

export default Testimonials;
