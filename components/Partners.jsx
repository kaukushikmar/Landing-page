import React from "react";
import img14 from "../images/img141.png";
import img15 from "../images/img151.png";
import img16 from "../images/img161.png";
import img17 from "../images/img171.png";
import img18 from "../images/img18.png";
import Image from "next/image";
import { analytics } from "../segment/analytics";

function Features() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div>
          <h1 className="text-5xl font-extrabold pb-3">Our Partners</h1>
        </div>
        <a
          target="_blank"
          href="https://www.trmlabs.com/"
          rel="noopener noreferrer"
          className="lg:flex lg:flex-row pr-10"
          onClick={() =>
            analytics.track("Button Clicked", {
              location: "Home page",
              component: "Partners",
              label: "TRM labs",
            })
          }
        >
          <div className="py-10 px-10 pt-16  flex-shrink-0">
            <Image src={img16} alt="TRM Labs" />
          </div>
          <div className="py-10 px-5">
            <h2 className="text-2xl font-extrabold pb-3">TRM Labs</h2>
            <p className="text-lg text-gray-700 pb-3">
              Screen crypto wallets and transactions for AML and sanctions
              compliance, assess the risk profile of Virtual Asset Service
              Providers and other crypto business
            </p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://sumsub.com/"
          rel="noopener noreferrer"
          className="lg:flex lg:flex-row pr-10"
          onClick={() =>
            analytics.track("Button Clicked", {
              location: "Home page",
              component: "Partners",
              label: "Sumsub",
            })
          }
        >
          <div className="py-10 px-10 flex-shrink-0">
            <Image src={img15} alt="SumSub" />
          </div>
          <div className="py-10 px-5">
            <h2 className="text-2xl font-extrabold pb-3">SumSub</h2>
            <p className="text-lg text-gray-700 pb-3">
              Sumsub is a tech company that helps businesses stay compliant with
              different regulations worldwide, steer clear of identity fraud,
              and verify clients easily with holistic KYC solutions. Sumsub is
              trusted by 1000+ businesses, including BlaBlaCar, Binance, ESL
              Gaming, TransferGo and others.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Features;
