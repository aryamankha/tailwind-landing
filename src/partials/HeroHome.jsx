import React, { useState } from "react";
import Modal from "../utils/Modal";
import Landing from "../images/landingPage.png";

import HeroImage from "../images/hero-image.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function EmailMessage(props) {
    const emailSubmitted = props.emailSubmitted;
    if (emailSubmitted) {
      return (
        <p className="text-sm text-gray-400 mt-3"> We'll keep you posted! </p>
      );
    }
    return (
      <p className="text-sm text-gray-400 mt-3">
        {" "}
        Be the first to hear about everything Vivid.{" "}
      </p>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <img className="hidden" src={Landing}></img>
      <div className="max-w-7xl md:h-screen mx-auto px-8 justify-center sm:justify-start sm:px-10">
        {/* Hero content */}
        <div className="flex h-screen items-center flex-col lg:flex-row gap-16 pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center  md:text-left pb-12 md:pb-16 items-center">
            <h1
              className="text-4xl dark:text-white md:text-[4.5rem] font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Build{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                visually.
              </span>
            </h1>
            <h1
              className="text-4xl  dark:text-white md:text-[4.5rem] font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Code{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
                faster.
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Vivid makes front-end development effortless with our in-browser
                visual editor to modify your code.{" "}
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                {/* CTA form */}
                <form
                  name="emailSubmissionForm"
                  className="w-full"
                  method="post"
                >
                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start max-w-xs mx-auto sm:max-w-lg lg:mx-0">
                    <input
                      type="hidden"
                      name="form-name"
                      value="emailSubmissionForm"
                    ></input>
                    <input
                      type="email"
                      className="form-input w-full appearance-none bg-slate-50 border border-slate-200 focus:border-slate-400 rounded-lg px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-slate-500 placeholder-gray-500"
                      placeholder="Ex. richard.hendricks@piedpiper.com"
                      aria-label="Your email…"
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <button
                      onClick={() => setEmailSubmitted(true)}
                      type="submit"
                      className=" btn rounded-lg ml-2 text-white bg-black hover:bg-blue-600 shadow"
                    >
                      <span className="mx-4">Waitlist</span>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <EmailMessage emailSubmitted={emailSubmitted}></EmailMessage>
                </form>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={HeroImage}
                  width="900"
                  height="900"
                  alt="Hero"
                />
                <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="hero-ill-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="99.24%"
                      id="hero-ill-b"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="hero-ill-e"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fillOpacity=".04"
                      fill="url(#hero-ill-a)"
                      cx="384"
                      cy="216"
                      r="128"
                    />
                    <circle
                      fillOpacity=".16"
                      fill="url(#hero-ill-b)"
                      cx="384"
                      cy="216"
                      r="96"
                    />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://player.vimeo.com/video/174002812"
                  title="Video"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
