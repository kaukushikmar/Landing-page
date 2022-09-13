import Header from "../components/Header.jsx";
import PulseHome from "../components/PulseHome";
import PulseFeatures from "../components/PulseFeatures";
import PulseFeatures2 from "../components/PulseFeatures2";
import PulseFeatures3 from "../components/PulseFeatures3";
import Footer from "../components/Footer";
import BookCall from "../components/BookCall";
import { useEffect } from "react";
import { analytics } from "../segment/analytics";
import useTimeSpent from "../segment/timeanalytics.jsx";

function Pulse() {
  useEffect(() => {
    analytics.page("Pulse", "page");
  }, []);

  useEffect(() => {
    analytics.page("Pulse", "page");
  }, []);

  useTimeSpent("Pulse Page");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <PulseHome />
        <PulseFeatures2 />
        <PulseFeatures />
        <PulseFeatures3 />
        <BookCall />
      </main>
      <Footer />
    </div>
  );
}
export default Pulse;
