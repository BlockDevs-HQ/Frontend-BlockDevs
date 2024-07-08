"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white font-medium py-12 px-4 font-sans tracking-wide">
      <div className="text-center">
        <h6 className="text-base">Stay connected with us:</h6>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4 my-8">
          <li>
            <a
              href="https://x.com/_BlockDevs"
              className="text-xl hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-7 h-7"
                viewBox="0 0 1227 1227"
              >
                <path
                  d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z"
                  data-original="#000000"
                />
                <path
                  fill="#fff"
                  d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z"
                  data-original="#ffffff"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/+IeQ3sKQ_LIU4MzY9"
              className="text-xl hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt="Telegram"
                className="inline w-7 h-7"
              />
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/BlockDevs-HQ"
              className="text-xl hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/256px-GitHub_Invertocat_Logo.svg.png?20230417032619" 
                  alt="Github" 
                  className="inline w-7 h-7 bg-slate-50 rounded-full"
                />
              </a>
          </li>
        </ul>

        <p className="text-base">
          &copy; 2024
          <a target="_blank" className="hover:underline mx-2">
            BlockDevs
          </a>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
