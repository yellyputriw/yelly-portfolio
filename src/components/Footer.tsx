import React from "react";
import { BsHeart } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full border-t px-24 py-8">
      <div className="mx-auto flex w-full justify-center">
        <p className="flex items-center gap-1 whitespace-nowrap font-pompiere text-xl text-primary">
          Design & Build with <BsHeart /> by Yelly Putri
        </p>
      </div>
    </footer>
  );
};

export default Footer;
