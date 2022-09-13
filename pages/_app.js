import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import Link from 'next/link';

function MyApp({ Component, pageProps }) {

  const handleAcceptCookie = () => {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted'
    });
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_ga_RYC6MW6BLX");
    Cookies.remove("_gid");
    Cookies.remove("_gat_gtag_UA_194839245_1");
    gtag('consent', 'update', {
      'ad_storage': 'denied'
    });
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);


  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);


  return <>
    {/* GA script to track */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-RYC6MW6BLX"
    />

    <script
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RYC6MW6BLX', { page_path: window.location.pathname });
              gtag('consent', 'default', { 
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
              });
            
            `,
      }}
    />
    {/*  Cookie consent */}
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      style={{ background: "#090E24" }}
      buttonStyle={{ background: "#2563EB", color: "white", fontSize: "17px", borderRadius: "3px", }}
      expires={150}
      enableDeclineButton
      declineButtonStyle={{
        background: "#c12a2a",
        border: "0px",
        borderRadius: "3px",
        fontSize: "17px",
      }}
      acceptOnScroll={true}
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
    >
      <div  >This website uses cookies to enhance the user experience.<a href="cookiepolicy" type="button" className="text-[#0000FF] cursor-pointer pl-1" passHref> Cookies </a> <a href="privacypolicy" type="button" className="text-[#0000FF] cursor-pointer pl-1" passHref> Privacy Policy </a></div>
    </CookieConsent>

    <Component {...pageProps} /></>;
}

export default MyApp;
