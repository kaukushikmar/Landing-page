import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Terms from "../components/Terms";
import { useEffect } from "react";
import { analytics } from "../segment/analytics";
import useTimeSpent from "../segment/timeanalytics.jsx";

function Ter() {
  useEffect(() => {
    analytics.page("Terms of service", "page");
  }, []);

  useEffect(() => {
    analytics.page("Terms of service", "page");
  }, []);

  useTimeSpent("Terms of service Page");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Terms />
      </main>
      <Footer />
    </div>
  );
}
export default Ter;
