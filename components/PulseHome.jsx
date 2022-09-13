import React, { useState } from "react";
import Modal from "../utils/Modal";
import Image from "next/image";
import HeroImage from "../images/hero.png";
import { analytics } from "../segment/analytics";

function PulseHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative ">
      {/* Illustration behind hero content */}

      <div className="mx-auto ">
        {/* Hero content */}
        <div className="flex flex-col xl:flex-row pt-32 pb-12 md:pt-40 md:pb-20 px-24 ">
          {/* Section header */}
          <div className="mx-auto w-full max-w-3xl text-center xl:text-left px-4 mt-12 text-haiti xl:mx-0 xl:max-w-2xl ">
            <h1
              className="text-3xl md:text-5xl font-extrabold leading-tighter mb-6"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Pulse: Dynamic customer risk scoring
              </span>
            </h1>
            <div className=" mx-auto">
              <p
                className="text-lg mt-3 text-gray-600 mb-8 text-center xl:text-left"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Pulse automates and streamlines the user risk assessment process
                with an API-first approach and a no code back office portal.
              </p>
            </div>
            <div className="relative rounded md:rounded-r-noneh-10">
              <a
                className="border font-semibold inline-block rounded text-center transition-all px-4 py-2 text-md bg-[#0064DA] border-transparent text-white hover:bg-[#002c73] hover:text-white lg:mt-0 lg:w-auto "
                href="contact"
                rel="noopener noreferrer"
                onClick={() =>
                  analytics.track("Get started for free Button Clicked", {
                    location: "Pulse page",
                    label: "Get started for free",
                  })
                }
              >
                Get started for free
              </a>
            </div>
            <a
              target="_blank"
              href="https://docs.flagright.com"
              rel="noopener noreferrer"
              className="group mt-6 flex flex-col font-medium sm:block lg:mt-12"
              data-aos="zoom-y-out"
              onClick={() =>
                analytics.track("Check the Docs Button Clicked", {
                  location: "Pulse page",
                  label: "Check the Docs",
                })
              }
            >
              <span className="text-[#9000ff]">
                Check the docs
                <span className="ml-1 inline-block transform transition-transform duration-100 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center shadow-2xl rounded-lg">
                <Image
                  className="mx-auto"
                  src={HeroImage}
                  width="768"
                  height="432"
                  alt="Flagright’s console sample"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PulseHome;
