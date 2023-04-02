import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${scrolled && styles.sticky}`}>
      <div className={styles.content}>
        <div className={styles.nav__logo}>
          <a href="">
            <img src="/amadeus_logo.png" alt="logo" />
          </a>
        </div>
        <div className="hidden md:block">
          <ul className={styles.menu}>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <Popover className={styles.mobile__menu}>
          {({ open }) => (
            <>
              {" "}
              <Popover.Button
                className={`${
                  open ? "" : "text-opacity-90"
                } text-white group px-3 py-2 rounded-md inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <Bars3Icon
                  className={`${open ? "" : "text-opacity-100"}
                  h-8 w-8 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 w-screen px-4 mt-3 left-0 right-0 bg-[#0B0C1B]">
                <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-4 bg-transparent p-4">
                    <div className="flex text-white flex-col gap-4 items-center font-poppins uppercase">
                      <a href="#hero">Home</a>
                      <a href="#about">About Us</a>
                      <a href="#roadmap">Roadmap</a>
                      <a href="#contact">Contact</a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
