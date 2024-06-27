"use client";
import React from "react";
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const openGithub = () => {
    window.open("https://github.com/yellyputriw", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/yellyputri", "_blank");
  };

  const sendMail = () => {
    window.location.href = "mailto:yellyputriw@gmail.com";
  };

  return (
    <section
      id="contact"
      className="relative mx-auto flex max-w-7xl items-center justify-center px-5 pb-32 pt-32 md:pt-0"
    >
      <div className="flex max-w-7xl flex-col items-center justify-between gap-32">
        <div className="flex w-full flex-col items-center justify-center gap-5 text-center md:gap-8">
          <h2 className="text-center font-spicy-rice text-3xl text-primary md:text-5xl">
            Get In Touch
          </h2>
          <p className="max-w-[500px] font-pompiere text-xl md:text-2xl">
            Whether you have a question or just want to say hi, my inbox is
            always open. I’ll try my best to get back to you!
          </p>
          <div className="flex items-center justify-center gap-8">
            <button
              type="button"
              className="flex items-center justify-center rounded-full border border-secondary bg-transparent p-5 text-secondary"
              onClick={openGithub}
            >
              <BsGithub className="text-xl" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center rounded-full border border-secondary bg-transparent p-5 text-secondary"
              onClick={openLinkedin}
            >
              <BsLinkedin className="text-xl" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center rounded-full border border-secondary bg-transparent p-5 text-secondary"
              onClick={sendMail}
            >
              <BsEnvelopeFill className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
