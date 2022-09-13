import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Form from "../components/FormGeneral";
function contactus() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow" style={{ margin: "auto", width: "600px" }}>
        <div>
          <p
            style={{ fontWeight: "bold", fontSize: "20px", marginTop: "100px" }}
          >
            Schedule a demo
          </p>
          <p style={{ marginBottom: "30px" }}>
            We&apos;re excited to give you a demo and answer all your questions.
            Complete the form below and we&apos;ll get in touch with you shortly
          </p>
        </div>
        <Form />
      </main>
      <Footer />
    </div>
  );
}
export default contactus;
