import React from "react";
import globe from "../images/global.png";
import Image from "next/image";
import GGlobe from "./Globe";
function features() {
  return (
    <section id="container2" className="text-gray-700 body-font bg-[#090E24]">
      <div className="container mx-auto flex px-20 py-24 xl:flex-row flex-col items-center">
        <div className="xl:flex-grow xl:w-1/3 xl:pr-24 xl:pr-10 flex flex-col xl:items-start xl:text-left mb-16 xl:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            Fincrime
            <br className="hidden xl:inline-block" /> Prevention That
            <br className="hidden xl:inline-block" /> Scales With You
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Flagright is trusted by fast growing startups that require high
            availability, security, and scalability.
          </p>
          <div className="flex justify-center">
            <div className=" inline-flex text-white border-0 py-2 pr-6 focus:outline-none rounded text-lg">
              <p>
                <p className="font-bold">700ms</p>
                <p className="font-light">Average Response Time</p>
              </p>{" "}
            </div>
            <div className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
              {" "}
              <p>
                <p className="font-bold">100MS</p>
                <p className="font-light">Average Latency</p>
              </p>{" "}
            </div>
            <div className=" inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
              <p>
                <p className="font-bold">99.99%</p>
                <p className="font-light">Average API Uptime</p>
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="xl:max-w-lg xl:w-2/3 lg:w-3/4 w-5/6">
          {/* <Image className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600/edf2f7/a5afbd" layout="fill" /> */}
          <GGlobe />
        </div>
      </div>
    </section>
  );
}

export default features;
