import Header from "../components/Header.jsx";
import Container4 from "../components/Container4";
import HeroHome from "../components/HeroHome";
import FeaturesHome from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Container2 from "../components/container2";
import Container3 from "../components/Container3";
import Partners from "../components/Partners";
import BookCall from "../components/BookCall";
import { analytics } from "../segment/analytics";
import { useEffect } from "react";
import {
  browserName,
  deviceType,
  browserVersion,
  osName,
  mobileModel,
  mobileVendor,
} from "react-device-detect";
import useTimeSpent from "../segment/timeanalytics.jsx";

export default function Home() {
  const browser = browserName;
  const Device = deviceType;
  useEffect(() => {
    analytics.page("Viewed Home Page", {
      Browser: browser,
      BrowserVersion: browserVersion,
      Device: Device,
      OperatingSystem: osName,
      MobileDeviceDetails: {
        MobileModel: mobileModel,
        MobileVendor: mobileVendor,
      },
    });
  }, []);

  useTimeSpent("Home Page");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <Testimonials />
        <FeaturesHome />
        <Container4 />
        <Container3 />
        <FeaturesBlocks />
        <Container2 />
        <Partners />

        <BookCall />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
