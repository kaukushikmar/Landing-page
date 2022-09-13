import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Imprint from "../components/Imprint";
import { useEffect } from "react";
import { analytics } from "../segment/analytics";
import useTimeSpent from "../segment/timeanalytics.jsx";

function Imprin() {
  useEffect(() => {
    analytics.page("Imprint", "page");
  }, []);

  useEffect(() => {
    analytics.page("Imprint", "page");
  }, []);

  useTimeSpent("Imprint Page");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Imprint />
      </main>
      <Footer />
    </div>
  );
}
export default Imprin;
