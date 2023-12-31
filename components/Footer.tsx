import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 md:py-8 ">
      <hr className="my-6 border-gray-400 lg:my-8 " />
      <span className="block text-md text-center">
        &copy; {new Date().getFullYear()}{" "}
        <a href="/" className="hover:underline">
          The Beacon
        </a>
      </span>
    </footer>
  );
};

export default Footer;