import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import Image from "next/image";
import FeaturesBg1 from "../images/api.png";
import FeaturesBg2 from "../images/content-image-2.png";
import FeaturesBg3 from "../images/content-image-3.png";
import FeaturesElement from "../images/features-element.png";
import {
  browserName,
  deviceType,
  browserVersion,
  osName,
  mobileModel,
  mobileVendor,
} from "react-device-detect";

function Features() {
  const browser = browserName;
  const Device = deviceType;

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section id="container3" className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 pb-7 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section content */}
          <div className="grid lg:grid-col-6 gap-6 lg:gap-4 h-150 min-h-full ">
            <div className="lg:col-start-1 lg:col-end-3 text-[#2563EB] font-extrabold text-5xl pt-12">
              Made for Compliance teams
            </div>
            <div className="lg:col-start-4 lg:col-end-6 mt-12 ">
              {/* Tabs buttons */}
              <div className="p-10 grid grid-flow-row-dense grid-cols-2 ">
                <div
                  className={`lg:border-b-2 ${
                    tab !== 1
                      ? "lg:border-b-[#262D4A]"
                      : "lg:border-b-[#2563EB]"
                  }`}
                >
                  <a
                    className={` text-lg ${
                      tab !== 1 ? "text-[#262D4A] " : "text-[#2563EB]"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(1);
                    }}
                  >
                    <div className="pl-6 p-2">Beacon</div>
                  </a>
                </div>
                <div
                  className={`lg:border-b-2 ${
                    tab !== 2
                      ? "lg:border-b-[#262D4A]"
                      : "lg:border-b-[#2563EB]"
                  }`}
                >
                  <a
                    className={` text-lg ${
                      tab !== 2 ? "text-[#262D4A] " : "text-[#2563EB]"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(2);
                    }}
                  >
                    <div className="pl-6 p-2">Pulse</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-start-1 lg:col-end-3 p-3 pr-5">
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div>
                  <div className="font-bold leading-snug tracking-tight mb-1 text-sm text-[#2563EB]">
                    PULSE : DYNAMIC CUSTOMER RISK SCORING
                  </div>
                  <div className="font-bold leading-snug tracking-tight mb-1 text-3xl">
                    Automate your regulatory requirement to risk-based approach
                    and score compliance & fraud risks per customer
                  </div>
                  <div className="text-gray-600 text-xl">
                    <p>
                      Automate your customer risk assessment processes with
                      Pulse. Leverage behavioral algorithms to ensure your
                      customer risk profiles are never outdated, with zero
                      additional effort. Console is a no-code back office portal
                      that lets to edit risk profiles and manage algorithms. You
                      can define risk level for B2B and B2C use cases based on
                      nationality, address, business industry, product line and
                      more.
                    </p>
                  </div>
                </div>
              </Transition>
              {/* Item 2 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div>
                  <div className="font-bold leading-snug tracking-tight mb-1 text-sm text-[#2563EB]">
                    BEACON : TRANSACTION MONITORING API
                  </div>
                  <div className="font-bold leading-snug tracking-tight mb-1 text-3xl">
                    A transaction monitoring tool that supports risk-based
                    thresholds and customer segments
                  </div>
                  <div className="text-gray-600 text-xl">
                    <p>
                      Set thresholds and actions for each rule based on customer
                      risk profiles and segments to make risk-based decisions
                      and minimize redundant workload for your team. All
                      manageable on Console in a few clicks, no coding, no
                      engineering tickets, no waiting.
                    </p>
                  </div>
                </div>
              </Transition>
              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div>
                  <div className="font-bold leading-snug tracking-tight mb-1 text-sm text-[#2563EB]">
                    SONAR : BAD ACTOR DATABASE FOR FRAUD PREVENTION
                  </div>
                  <div className="font-bold leading-snug tracking-tight mb-1 text-3xl">
                    Catch known bad actors with 100% certainty
                  </div>
                  <div className="text-gray-600 text-xl">
                    <p>
                      Sonar lets you validate your user & transaction data
                      against all other fintechs in our network in real-time. If
                      a fintech was targeted by bad actors, you can stop the
                      same bad actors from doing the same by querying the Sonar
                      database before you approve a transaction.
                    </p>
                  </div>
                </div>
              </Transition>
            </div>

            {/* Content */}

            {/* Tabs items */}
            <div
              className="lg:row-span-2 lg:col-start-4 lg:col-end-6"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg1}
                      width="500"
                      height="462"
                      alt="Beacon console data center"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg3}
                      width="500"
                      height="462"
                      alt="Pulse automation process"
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg2}
                      width="500"
                      height="462"
                      alt="Sonar database view with a landscape mode"
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
