import React from "react";
import Image from "next/image";
import HeroImage from "../images/hero.png";
import { analytics } from "../segment/analytics";

function Launchpadhome() {
  return (
    <section className="relative ">
      {/* Illustration behind hero content */}

      <div className="mx-auto ">
        {/* Hero content */}
        <div className="flex flex-col xl:flex-row pt-32 pb-12 md:pt-40 md:pb-20 px-24 ">
          {/* Section header */}
          <div className="mx-auto w-full max-w-3xl text-center xl:text-left px-4 mt-12 text-haiti xl:mx-0 xl:max-w-xl ">
            <h1
              className="text-3xl md:text-6xl font-extrabold mb-4"
              data-aos="zoom-y-out"
            >
              Launchpad
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Coming Soon
              </span>
            </h1>
            {/* <div className=" mx-auto">
                            <p className="text-lg mt-3 text-gray-600 mb-8 text-center xl:text-left" data-aos="zoom-y-out" data-aos-delay="150">LaunchPad</p>

                        </div> */}
            <div className="relative rounded md:rounded-r-none h-10 pt-10">
              <a
                className="border font-semibold inline-block rounded text-center transition-all px-4 py-2 text-md bg-[#0064DA] border-transparent text-white hover:bg-[#002c73] hover:text-white lg:mt-0 lg:w-auto "
                href="contactLaunchpad"
                rel="noopener noreferrer"
                onClick={() =>
                  analytics.track(
                    "Join waitlist and get expert advice Button Clicked",
                    {
                      location: "Launchpad page",
                      label: "Join waitlist and get expert advice",
                    }
                  )
                }
              >
                Join waitlist and get expert advice
              </a>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:w-3/5">
            <div
              className="relative mt-10"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-centerrounded-lg">
                <div className="text-xl text-gray-600 md:text-3xl font-semibold m-4">
                  <p>
                    The first automated solution helping fintech startups with
                    fintech licensing, authorization, and AML compliance policy
                    creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Launchpadhome;
