import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { analytics } from "../segment/analytics";
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

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto w-full space-y-6 text-center">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Empowering Fintechs with state of the art tooling to beat
              financial crime
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="">
                Flagright&apos;s developer-friendly API and no-code back office
                allows fintechs to quickly setup all required infrastructure for
                AML and fraud prevention. Our API is 70% faster to integrate.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-x-6 pt-12 md:grid-cols-2 md:pb-6 lg:grid-cols-2 lg:pt-20">
          <div className="my-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#F2F1FF]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="blue"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <rect
                  x="6.95996"
                  y="3.70074"
                  width="4.62768"
                  height="2.8923"
                  fill="blue"
                  fillOpacity="0.4"
                ></rect>
                <rect
                  x="6.95996"
                  y="9.48566"
                  width="4.62768"
                  height="2.8923"
                  fill="blue"
                  fillOpacity="0.4"
                ></rect>
                <rect
                  x="6.95996"
                  y="15.2706"
                  width="4.62768"
                  height="2.8923"
                  fill="blue"
                  fillOpacity="0.4"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.6859 9.48613V12.3788H11.5874V15.2711H19.6859V18.1628H11.5874V21.0551H21.9997L21.9997 21.0548V3.70109H21.9999V0.808792H21.9997V0.808716H19.6859V0.808792H11.5876V3.70109H19.6859V6.59383H11.5874V9.48613H19.6859Z"
                  fill="blue"
                ></path>
                <circle
                  cx="2.62137"
                  cy="5.14709"
                  r="1.73538"
                  fill="blue"
                ></circle>
                <circle
                  opacity="0.7"
                  cx="2.62137"
                  cy="11.221"
                  r="1.73538"
                  fill="blue"
                ></circle>
                <circle
                  opacity="0.3"
                  cx="2.62137"
                  cy="17.295"
                  r="1.73538"
                  fill="blue"
                ></circle>
              </svg>
            </div>
            <div>
              <div className="my-4 leading-tight">
                <h5 className="font-semibold leading-5">
                  For Engineering Teams
                </h5>
              </div>
              <p className="text-sm leading-6 pb-5 h-40">
                Flagright&apos;s developer friendly API takes developer teams 2
                weeks to integrate. Flagright API is the ultimate AML compliance
                and fraud prevention layer that enables you to deliver services
                to your customers at scale using your preferred frameworks.
              </p>
              <div className="">
                <Link
                  to="container4"
                  className="group cursor-pointer focus:outline-none pt-6 text-sm font-medium text-[#9000ff]"
                >
                  <div
                    onClick={() =>
                      analytics.track(
                        "Clicked Flagright for Engineering label",
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
                    Flagright for Engineering
                    <span className="ml-1 inline-block transform transition-transform duration-100 group-hover:translate-y-1">
                      ↓
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#FFEFF4]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  opacity="0.8"
                  fill="red"
                  d="M6.079 6.078h4.053v4.053H6.079z"
                ></path>
                <path
                  opacity="0.4"
                  fill="red"
                  d="M6.079 11.867h4.053v4.053H6.079z"
                ></path>
                <path
                  opacity="0.6"
                  fill="red"
                  d="M11.868 6.078h4.053v4.053h-4.053z"
                ></path>
                <path
                  opacity="0.2"
                  fill="red"
                  d="M11.868 11.867h4.053v4.053h-4.053z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.105 0H0v22h22V0h-2.895zm0 2.895H2.895v16.21h16.21V2.895z"
                  fill="red"
                ></path>
              </svg>
            </div>
            <div>
              <div className="my-4 leading-tight">
                <h5 className="font-semibold leading-5">
                  For Compliance Teams
                </h5>
              </div>
              <p className="text-sm leading-6 h-40 ">
                Flagright&apos;s console empowers operations and leadership
                teams operate at higher efficiency with low-friction. Case
                management users can get 200% increase in productivity with
                Flagright. Console enables Compliance & Fraud teams self-serve
                to activate, edit, deactivate, and monitor rules in a few
                seconds on a seamless user interface.
              </p>
              <div className="">
                <Link
                  to="container3"
                  className="group cursor-pointer focus:outline-none  text-sm font-medium text-[#9000ff]"
                >
                  <div
                    onClick={() =>
                      analytics.track(
                        "Clicked Flagright for Compliance teams label",
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
                    Flagright for Compliance Teams
                    <span className="ml-1 inline-block transform transition-transform duration-100 group-hover:translate-y-1">
                      ↓
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
