import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import { analytics } from "../segment/analytics";
import {
  browserName,
  deviceType,
  browserVersion,
  osName,
  mobileModel,
  mobileVendor,
} from "react-device-detect";

function Container4() {
  const browser = browserName;
  const Device = deviceType;

  const [tab, setTab] = useState(3);
  const [tabb, setTabb] = useState(2);

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
    <section id="container4" className="bg-[#090E24] relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="flex flex-col bg-[#090E24] relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12 pr-6">
        <div className="flex flex-col lg:flex-row pt-16">
          <div className="bg-[#090E24] text-[#2563EB] font-extrabold text-5xl pb-3 lg:w-1/2">
            Designed for Developers
          </div>
          <div className="lg:pb-3  pt-5 lg:pt-0 lg:w-1/2">
            <div className="bg-[#090E24] lg:border-2 lg:border-b-[#4936B0] lg:border-l-[#090E24] lg:border-r-[#090E24] lg:border-t-[#090E24] lg:p-8 lg:pt-0 flex flex-row scrolling-touch lg:top-0 lg:bottom-0 lg:relative lg:overflow-x-hidden shadow-none md:shadow-border ">
              <div className="lg:p-x-10">
                <a
                  className={`px-4 pb-5 text-xl font-medium uppercase  ${
                    tabb !== 2
                      ? "text-gray-600 "
                      : "text-white lg:text-[#4936B0]"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTabb(2);
                    setTab(3);
                  }}
                >
                  Beacon
                </a>
              </div>
              <div className="lg:p-x-5">
                <a
                  className={`px-4 pb-5 text-xl font-medium uppercase ${
                    tabb !== 1
                      ? "text-gray-600 "
                      : "text-white lg:text-[#4936B0]"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTabb(1);
                    setTab(1);
                  }}
                >
                  Pulse
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row pb-10">
          <div className="pt-7 lg:w-1/2 pr-5">
            <Transition
              show={tabb === 1}
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
                <div className="font-bold leading-snug mb-1 text-sm text-[#2563EB]">
                  PULSE : DYNAMIC RISK SCORING
                </div>
                <div className="font-bold leading-snug mb-1 text-3xl text-white">
                  Customer risk profiling based on user behavior as a
                  time-series algorithm
                </div>
                <div className="text-white text-xl pb-5">
                  <p>
                    Automate your customer risk assessment processes with Pulse
                    real-time API. Leverage behavioral algorithms to ensure your
                    customer risk profiles are never outdated, with zero
                    additional effort.
                  </p>
                </div>
                <a
                  className="border font-semibold inline-block rounded text-center transition-all px-4 py-2 text-md bg-transparent border-[#2563EB] text-[#2563EB] hover:bg-[#1147bb] hover:text-white"
                  href="https://docs.flagright.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() =>
                    analytics.track(
                      "Clicked Check Docs from Engineering section",
                      {
                        Browser: browser,
                        BrowserVersion: browserVersion,
                        Device: Device,
                        OperatingSystem: osName,
                        MobileDeviceDetails: {
                          MobileModel: mobileModel,
                          MobileVendor: mobileVendor,
                        },
                      }
                    )
                  }
                >
                  Check Docs →
                </a>
              </div>
            </Transition>
            {/* Item 2 */}
            <Transition
              show={tabb === 2}
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
                <div className="font-bold leading-snug  mb-1 text-sm text-[#2563EB]">
                  BEACON : TRANSACTION MONITORING API
                </div>
                <div className="font-bold leading-snug mb-1 text-3xl text-white">
                  Finally a transaction monitoring solution that works with you
                </div>
                <div className="text-white text-xl pb-5">
                  <p>
                    Experience the extreme performance: Always real-time
                    responses with our easy-to-integrate, fast, and scalable
                    REST API
                  </p>
                </div>
                <a
                  className="border font-semibold inline-block rounded text-center transition-all px-4 py-2 text-md bg-transparent border-[#2563EB] text-[#2563EB] hover:bg-[#1147bb] hover:text-white"
                  href="https://docs.flagright.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() =>
                    analytics.track(
                      "Clicked Check Docs from Engineering section",
                      {
                        Browser: browser,
                        BrowserVersion: browserVersion,
                        Device: Device,
                        OperatingSystem: osName,
                        MobileDeviceDetails: {
                          MobileModel: mobileModel,
                          MobileVendor: mobileVendor,
                        },
                      }
                    )
                  }
                >
                  Check Docs →
                </a>
              </div>
            </Transition>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <div className="p-10">
              <Transition
                show={tabb === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="inline">
                  <div className="inline">
                    <a
                      className={` text-base focus-outline-none rounded p-3 text-center uppercase text-white mr-2 ${
                        tab !== 1 ? "text-gray-600 " : "text-white bg-[#192452]"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(1);
                      }}
                    >
                      Verify
                    </a>
                  </div>
                  <div className="inline">
                    <a
                      className={` text-base focus-outline-none rounded p-3 text-center uppercase text-white mr-2 ${
                        tab !== 2 ? "text-gray-600 " : "text-white bg-[#192452]"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(2);
                      }}
                    >
                      Retrieve
                    </a>
                  </div>
                </div>
              </Transition>

              <Transition
                show={tabb === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="inline">
                  <div className="inline">
                    <a
                      className={` text-base focus-outline-none rounded p-3 text-center uppercase text-white mr-2 ${
                        tab !== 3 ? "text-gray-600 " : "text-white bg-[#192452]"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(3);
                      }}
                    >
                      Verify
                    </a>
                  </div>
                  <div className="inline ">
                    <a
                      className={` text-base focus-outline-none rounded p-3 text-center uppercase text-white mr-2 ${
                        tab !== 4 ? "text-gray-600 " : "text-white bg-[#192452]"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(4);
                      }}
                    >
                      Retrieve
                    </a>
                  </div>
                </div>
              </Transition>
            </div>
            <div>
              <div className="pl-5" ref={tabs}>
                <div className="relative flex flex-col lg:text-center lg:text-right">
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
                    <div className="">
                      <div className=" rounded bg-[#121937]">
                        <div>
                          <div className="sticky top-0 z-10 bg-[#121937] px-2 py-3 pb-6">
                            <div className="text-md bg-[#121937] ">
                              <pre className="language-graphql h-40 overflow-y-auto rounded bg-[#121937] p-6 font-mono ">
                                <div className="token-line bg-[#121937]">
                                  <span className="token keyword ">
                                    &quot;userId&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;96647cfd9e8fe66ee0f3362e011e34e8&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;userDetails&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;name&quot;:{" "}
                                  </span>
                                  <span>&#123;</span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;firstName&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Baran&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;middleName&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Realblood&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;lastName&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Ozkan&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125; ,
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;country&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    636286151,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;age&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 32, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;countryOfResidence&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;US&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;countryOfNationality&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;DE&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line bg-[#121937]">
                                  <span className="token plain ">
                                    &quot;legalDocuments&quot;:[{" "}
                                  </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    {" "}
                                    &#123;
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentType&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;passport&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentNumber&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Z9431P&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentIssuedDate&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    1639939034,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentExpirationDate&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    1839939034,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentIssuedCountry&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;DE&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token "> </span>
                                  <span className="token "> </span>
                                  <span className="token "> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    {" "}
                                    &#125;
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token "> </span>
                                  <span className="token "> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125;
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    {" "}
                                    ]
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
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
                    <div className="">
                      <div className=" rounded bg-[#121937]">
                        <div>
                          <div className="sticky top-0 z-10 bg-[#121937] px-2 py-3 pb-6">
                            <div className="text-sm bg-[#121937]">
                              <pre className="language-graphql h-40 overflow-y-auto rounded bg-[#121937] p-6 font-mono ">
                                <div className="token-line bg-[#121937]">
                                  <span className="token keyword ">
                                    &quot;userId&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;96647cfd9e8fe66ee0f3362e011e34e8&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;userRiskScoreDetails&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;baseSafetyScore&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 87.5, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;actionSafetyScore&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 58.33, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;actionRiskScore&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 72.32, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;dynamicSafetyScore&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 73.92, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;kycRiskScore&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 63.36 </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125;
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                              </pre>
                            </div>
                          </div>
                        </div>
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
                    <div className="">
                      <div className=" rounded bg-[#121937]">
                        <div>
                          <div className="sticky top-0 z-10 bg-[#121937] px-2 py-3 pb-6">
                            <div className="text-sm bg-[#121937]">
                              <pre className="language-graphql h-40 overflow-y-auto rounded bg-[#121937] p-6 font-mono ">
                                <div className="token-line bg-[#121937]">
                                  <span className="token keyword ">
                                    &quot;transactionId&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;7b80a539eea6e78acbd6d458e5971482&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;sendingAmountDetails&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;country&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;DE&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;transactionAmount&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 800, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;transactionCurrency&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;EUR&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125; ,
                                  </span>
                                  <span className="token plain"></span>
                                </div>

                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;receivingAmountDetails&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;country&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;IN&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;transactionAmount&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    68351.34,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;transactionCurrency&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;INR&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125; ,
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;timestamp&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    1641654664,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>

                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;senderPaymentDetails&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;methode&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;CARD&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;cardFingerprint&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;20ac00fed8ef913aefb17cfae1097cce&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;cardIssuedCountry&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;US&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;transactionReferenceField&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Deposit&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;3dsDone&quot;:{" "}
                                  </span>
                                  <span className="token plain"> true </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125; ,
                                  </span>
                                  <span className="token plain"></span>
                                </div>

                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;receiverPaymentDetails&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;methode&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;CARD&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;cardFingerprint&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;20ac00fed8ef913aefb17cfae1097cce&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;cardIssuedCountry&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;IN&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;transactionReferenceField&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Deposit&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;3dsDone&quot;:{" "}
                                  </span>
                                  <span className="token plain"> true </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125; ,
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 4}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-16"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-16"
                  >
                    <div className="">
                      <div className=" rounded bg-[#121937]">
                        <div>
                          <div className="sticky top-0 z-10 bg-[#121937] px-2 py-3 pb-6">
                            <div className="text-sm bg-[#121937]">
                              <pre className="language-graphql h-40 overflow-y-auto w-max-1/2 rounded bg-[#121937] p-6 font-mono ">
                                <div className="token-line bg-[#121937]">
                                  <span className="token keyword ">
                                    &quot;transactionId&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;7b80a539eea6e78acbd6d458e5971482&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;executedRules&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;ruleId&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;R-1a&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;ruleName&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Proof of funds for high value
                                    transactions&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;ruleDescription&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;If a user makes a remittance{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token plain">
                                    {" "}
                                    transaction 1800 in EUR - ask for proof of
                                    funds&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;ruleAction&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;block&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;ruleHit&quot;:{" "}
                                  </span>
                                  <span className="token plain"> true </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125; ,
                                  </span>
                                  <span className="token plain"></span>
                                </div>

                                <div className="token-line bg-[#121937]">
                                  <span className="token plain ">
                                    &quot;failedRules&quot;:
                                  </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    {" "}
                                    &#123;
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;ruleId&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;R-1b&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;ruleName&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Proof of funds for high value
                                    transactions&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;ruleDescription&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;If a user makes a remittance{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token plain">
                                    {" "}
                                    transaction 1800 in EUR - ask for proof of
                                    funds&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;failureException&quot;:{" "}
                                  </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    {" "}
                                    &#123;
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;exceptionName&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;MISSING_DATA&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;exceptionDescription&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Some data is missing&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token "> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125; ,
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token "> </span>
                                  <span className="token "> </span>
                                  <span className="token "> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    {" "}
                                    &#125;
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} /> */}
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 5}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-16"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-16"
                  >
                    <div className="">
                      <div className=" rounded bg-[#121937]">
                        <div>
                          <div className="sticky top-0 z-10 bg-[#121937] px-2 py-3 pb-6">
                            <div className="text-sm bg-[#121937]">
                              <pre className="language-graphql h-40 overflow-y-auto rounded bg-[#121937] p-6 font-mono ">
                                <div className="token-line bg-[#121937]">
                                  <span className="token keyword ">
                                    &quot;userId&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;96647cfd9e8fe66ee0f3362e011e34e8&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;userDetails&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;name&quot;:{" "}
                                  </span>
                                  <span>&#123;</span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;firstName&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Baran&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;middleName&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Realblood&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;lastName&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Ozkan&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125; ,
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;dateOfBirth&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    6300221234,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;countryOfResidence&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;DE&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>

                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;idDocumentDetails&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentType&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;passport&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentNumber&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;Z9431P&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentIssuedDate&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    1639939034,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentExpirationDate&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    1839939034,
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;documentIssuedCountry&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;DE&quot;{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token "> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    {" "}
                                    &#125;
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} /> */}
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 6}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-16"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-16"
                  >
                    <div className="">
                      <div className=" rounded bg-[#121937]">
                        <div>
                          <div className="sticky top-0 z-10 bg-[#121937] px-2 py-3 pb-6">
                            <div className="text-sm bg-[#121937]">
                              <pre className="language-graphql h-40 overflow-y-auto rounded bg-[#121937] p-6 font-mono ">
                                <div className="token-line bg-[#121937]">
                                  <span className="token keyword ">
                                    &quot;matchInDatabase&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;7b80a539eea6e78acbd6d458e5971482&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb bg-[#121937]">
                                  <span className="token plain">
                                    &quot;matchDetails&quot;:
                                  </span>
                                  <span>&#123;</span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;totalNumberOfSourcesReported&quot;:{" "}
                                  </span>
                                  <span className="token plain">
                                    {" "}
                                    &quot;R-1a&quot;,{" "}
                                  </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;reportedReasons&quot;:{" "}
                                  </span>
                                  <span>&#123;</span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;promo_abuse&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 9, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;duplicate_user&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 3, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;account_takeover&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 1, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;address_obfuscation&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 0, </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token keyword ">
                                    &quot;chargeback_abuse&quot;:{" "}
                                  </span>
                                  <span className="token plain"> 3 </span>
                                  <span className="token plain bg-[#121937]">
                                    {" "}
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125; ,
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                                <div className="token-line color:#d6deeb">
                                  <span className="token plain"> </span>
                                  <span className="token punctuation color:rgb(199, 146, 234)">
                                    &#125;
                                  </span>
                                  <span className="token plain"></span>
                                </div>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Container4;
