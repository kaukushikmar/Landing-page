import React from "react";
import Script from "next/script";
import HubspotForm from "react-hubspot-form";
import { BoxLoading } from "react-loadingg";
function form() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-inner-wrapper ">
          <div className="row justify-center">
            <div className="col-xl-7 col-lg-8 py-10 px-24">
              <div className="cta-content">
                <Script
                  charset="utf-8"
                  type="text/javascript"
                  src="//js-eu1.hsforms.net/forms/v2-legacy.js"
                ></Script>
                <Script
                  charset="utf-8"
                  type="text/javascript"
                  src="//js-eu1.hsforms.net/forms/v2.js"
                ></Script>
                <HubspotForm
                  region="eu1"
                  portalId="25637571"
                  formId="39a0739b-4803-4d7c-9466-4b7a9b0eb676"
                  loading={
                    <div>
                      <BoxLoading />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default form;
