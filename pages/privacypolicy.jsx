import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Privacy from "../components/Privacy";
import { useEffect } from "react";
import { analytics } from "../segment/analytics";
import useTimeSpent from "../segment/timeanalytics.jsx";

function Privac() {
  useEffect(() => {
    analytics.page("Privacy policy", "page");
  }, []);

  useEffect(() => {
    analytics.page("Privacy policy", "page");
  }, []);

  useTimeSpent("Privacy policy Page");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Privacy />
      </main>
      <Footer />
    </div>
  );
}
export default Privac;
