import React from "react";
import globe from "../images/global.png";
import Image from "next/image";
import FeaturesBg2 from "../images/img11.png";
function BeaconFeatures2() {
  return (
    <section id="container2" className="text-gray-700 body-font ">
      <div className="container mx-auto flex px-20 py-24 mx-15 xl:flex-row flex-col items-center">
        <div className="text-gray xl:flex-grow xl:w-1/2 xl:max-w-3xl flex flex-col px-15 xl:items-start xl:text-left mb-16 xl:mb-0 items-center text-center">
          <h1 className="text-gray-900 title-font sm:text-4xl text-3xl mb-4 font-bold ">
            Transaction Monitoring for
            <br className="hidden xl:inline-block" /> Fintech Startups
          </h1>

          <div className="flex justify-center">
            <p className="text-lg mt-3 text-gray-600 mb-8 text-center xl:text-left">
              A fully automated system, guided by human input.
              <br className="hidden xl:inline-block" />
              The transaction monitoring rules engine is designed to detect and
              <br className="hidden xl:inline-block" />
              prevent suspicious activity
              <br className="hidden xl:inline-block" />
              in real-time.
            </p>
          </div>
        </div>
        <div className="xl:max-w-lg xl:w-1/2 lg:w-3/4 w-5/6">
          <Image
            className="md:max-w-none mx-auto rounded"
            src={FeaturesBg2}
            width={650}
            height={400}
            alt="Depiction of a cloud hosting"
          />
        </div>
      </div>
    </section>
  );
}

export default BeaconFeatures2;
