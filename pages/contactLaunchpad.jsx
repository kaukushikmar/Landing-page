import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Form from "../components/FormLaunchpad";
function contactus() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
export default contactus;
