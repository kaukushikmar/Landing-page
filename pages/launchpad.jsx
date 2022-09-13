import Header from "../components/Header.jsx";
import Lauchpadhome from "../components/Launchpadhome";
import Footer from "../components/Footer";
import BookCall from "../components/BookCall";
import { useEffect } from "react";
import { analytics } from "../segment/analytics";
import useTimeSpent from "../segment/timeanalytics.jsx";

function Launchpad() {
  useEffect(() => {
    analytics.page("Launchpad", "page");
  }, []);

  useEffect(() => {
    analytics.page("Launchpad", "page");
  }, []);

  useTimeSpent("Launchpad Page");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Lauchpadhome />
        <BookCall />
      </main>
      <Footer />
    </div>
  );
}
export default Launchpad;
