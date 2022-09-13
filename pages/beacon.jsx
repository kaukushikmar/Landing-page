import Header from "../components/Header";
import BeaconHome from "../components/BeaconHome";
import BeaconFeatures from "../components/BeaconFeatures";
import BeaconFeatures2 from "../components/BeaconFeatures2";
import BeaconFeatures3 from "../components/BeaconFeatures3";
import PulseFeatures3 from "../components/PulseFeatures3";
import Footer from "../components/Footer";
import BookCall from "../components/BookCall";
import { analytics } from "../segment/analytics";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useTimeSpent from "../segment/timeanalytics.jsx";

function Beacon() {
  const router = useRouter();

  useEffect(() => {
    analytics.page("Beacon", "page");
  }, []);

  useTimeSpent("Beacon Page");

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="flex-grow">
          <BeaconHome />
          <BeaconFeatures2 />
          <BeaconFeatures />
          <BeaconFeatures3 />
          <PulseFeatures3 />
          <BookCall />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default Beacon;
