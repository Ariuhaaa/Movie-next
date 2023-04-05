import React from "react";

export const Footer = (): JSX.Element => (
  <div className="bg-gray-800">
    <div className="flex pl-10 mb-5">
      <div className="text-white flex-initial w-64 mt-5 mb-5">
        <p>Help</p>
        <p>About Rotten Tomatoes</p>
        <p>What's the Tomatometer?</p>
      </div>
      <div className="text-white flex-initial w-64 mt-5 mb-5">
        <p>Critic Submission</p>
        <p>Licensing</p>
        <p>Advertise With Us</p>
        <p>Careers</p>
      </div>
      <div className="text-white flex-initial w-64 mt-5 mb-5">
        <h2>JOIN THE NEWSLETTER</h2>
        <p>
          Get the freshest reviews, news, and more delivered right to your
          inbox!
        </p>
        <button className="bg-slate-100 text-black rounded">
          JOIN THE NEWSLETTER
        </button>
      </div>
      <div className="text-white flex-initial w-64 mt-5 mb-5">
        <h2 className="pl-10">FOLLOW US</h2>
      </div>
    </div>
    <div className="flex text-white gap-5 justify-center">
      <p>Privacy Policy | </p>
      <p>Terms and Policies |</p>
      <p>Cookie Notice |</p>
      <p>California Notice |</p>
      <p>Ad Choices |</p>
      <p>Accessibility</p>
    </div>
  </div>
);
