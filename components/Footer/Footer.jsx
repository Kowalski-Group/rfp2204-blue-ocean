/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-white mt-auto shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-400">
      <span className="text-sm text-white sm:text-center dark:text-white">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Kowalski Group™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-white sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
