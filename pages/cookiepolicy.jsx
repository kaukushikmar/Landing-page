import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Cookie from "../components/Cookie";
import { useEffect } from "react";
import { analytics } from "../segment/analytics";
import useTimeSpent from "../segment/timeanalytics.jsx";

function Cookiepolicy() {
  useEffect(() => {
    analytics.page("Cookie policy", "page");
  }, []);

  useEffect(() => {
    analytics.page("Cookie policy", "page");
  }, []);

  useTimeSpent("Cookie policy Page");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Cookie />
      </main>
      <Footer />
    </div>
  );
}
export default Cookiepolicy;
