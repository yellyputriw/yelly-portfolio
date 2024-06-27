import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full overflow-hidden">
      <div className="absolute top-0 w-full px-5 py-8 md:px-24">
        <nav className="mx-auto flex max-w-80 justify-center md:max-w-96">
          <ul className="flex w-full justify-between">
            <li>
              <Link
                href="#project"
                className="font-pompiere text-xl text-dark hover:text-primary md:text-2xl"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="font-pompiere text-xl text-dark hover:text-primary md:text-2xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="font-pompiere text-xl text-dark hover:text-primary md:text-2xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
