import React from "react";

function SonarFeature() {
  return (
    <section id="container1" className="text-gray-700 body-font ">
      <div className="w-full px-7 py-24 pb-6 ">
        <div className="px-24 ">
          <h2 className="text-3xl md:text-3xl font-extrabold leading-tighter mb-4">
            {" "}
            Bad Actor Database
          </h2>
          <p className="text-lg py-6">
            Flagright Sonar is a known bad actor database enabling fintech
            startups collaborate anonymously against chargebacks, fraud, and
            financial crime. It is a free (because you provide your data) with
            unlimited API calls and is built on trust that everyone in the
            community will contribute to it with accurate data of bad actors in
            their systems. Flagright reserves the right to monitor, assess,
            investigate the usage data and might terminate access if we conclude
            that this trust is being abused.
          </p>
        </div>
      </div>
      <div className="px-7 py-6">
        <div className="px-24 ">
          <span className="text-3xl md:text-3xl font-extrabold mb-4 leading-tighter text-gray-700 py-1">
            How it works
          </span>
          <p className="text-xl py-6 text-gray-700">
            There are two APIs:
            <ul className="px-6 list-disc">
              <li className="py-1">Contribute API</li>
              <li className="py-1">Query API</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="px-7 py-6 ">
        <div className="px-24 w-full ">
          <span className="text-2xl font-bold my-4">Contribute API</span>
          <p className="text-lg py-6 ">
            This API enables you to report known bad actors from your
            environment. It lets various specify parameters including routing
            and bank account numbers, email address, zip code, reason for
            reporting etc. It returns a success or failure message. See the API
            specifications for more.
          </p>
          <span className="text-2xl font-bold my-4 ">Query API</span>
          <p className="text-lg py-6 ">
            This API enables your to query your transaction payload against
            Sonar Database. It lets you specify various parameters including
            routing and bank account numbers, email address, zip code, reason
            for reporting etc. It returns whether there is a match for each
            parameter you queried, the number of reports by others in the
            community, and the reason for reporting for each. See the API
            specifications for more.
          </p>
        </div>
      </div>
      <div className="px-7 py-6 ">
        <div className="px-24 w-full ">
          <span className="text-2xl font-bold my-4 text-gray-700">Reasons</span>
          <p className="text-lg py-6 text-gray-700">
            We do not map to all ACH codes, but only the common ones whatever it
            might be relevant for fraud.
          </p>
          <p className="text-lg py-6 text-gray-700">
            <span className="text-[#ff5d57] border border-solid border-[#ff5d57] rounded px-1 bg-[#fff3f3] pr-2">
              insufficient_funds :
            </span>{" "}
            The user took advantage of ACH processing time and moved the funds
            out of your services, leaving your services, leaving your position
            in the open(before the ACH transaction was complete, returning an
            NSF code).
          </p>
          <p className="text-lg py-6 text-gray-700">
            <span className="text-[#ff5d57] border border-solid border-[#ff5d57] rounded px-1 bg-[#fff3f3] pr-2">
              authorization_revoke :
            </span>{" "}
            The user reported to the bank that the transaction was not
            authorized and revoke the transaction authorization prior to the
            transaction date.
          </p>
          <p className="text-lg py-6 text-gray-700">
            <span className="text-[#ff5d57] border border-solid border-[#ff5d57] rounded px-1 bg-[#fff3f3] pr-2">
              account_unqualified :
            </span>{" "}
            Account doesn&apos;t exist, is closed, or a similar issue with the
            account setup.
          </p>
          <p className="text-lg py-6 text-gray-700">
            <span className="text-[#ff5d57] border border-solid border-[#ff5d57] rounded px-1 bg-[#fff3f3] pr-2">
              unauthorized_pull :
            </span>{" "}
            The user initiated an authorized pull from a counter-party.
          </p>
          <p className="text-lg py-6 text-gray-700">
            <span className="text-[#ff5d57] border border-solid border-[#ff5d57] rounded px-1 bg-[#fff3f3] pr-2">
              scam :
            </span>{" "}
            The user is using your services to scam other.
          </p>
          <p className="text-lg py-6 text-gray-700">
            <span className="text-[#ff5d57] border border-solid border-[#ff5d57] rounded px-1 bg-[#fff3f3] pr-2">
              fake_id :
            </span>{" "}
            The user used a stolen identity to create an account.
          </p>
          <p className="text-lg py-6 text-gray-700">
            <span className="text-[#ff5d57] border border-solid border-[#ff5d57] rounded px-1 bg-[#fff3f3] pr-2">
              count_takeover :
            </span>{" "}
            The transaction was submitted from a compromised account by a
            malicious party.
          </p>
        </div>
      </div>
    </section>
  );
}
export default SonarFeature;
