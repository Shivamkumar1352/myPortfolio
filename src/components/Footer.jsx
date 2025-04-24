import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-[18px] font-semibold mb-4">Connect with me</p>
        <div className="flex space-x-6 text-[24px]">
          <a href="https://github.com/Shivamkumar1352" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://leetcode.com/u/shivamkumar1352002/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/shivxmm._._/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/shivamkumar1352/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition duration-300" />
          </a>
        </div>
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Shivam kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
