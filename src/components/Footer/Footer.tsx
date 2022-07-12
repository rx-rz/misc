import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-fit  dark:bg-gray-900  px-3 pb-6 sm:pb-8">
      <Link to='/' className="font-bold text-4xl text-primary">MISCavatars</Link>

      <div className="text-2xl  sm:w-5/12 md:w-4/12 flex w-10/12 justify-between text-center dark:text-white ">
        <a href="https://www.twitter.com/temiloluwa_js" className="my-2 transition-colors duration-300 hover:text-blue-600">
          Twitter
        </a>
        <a href="https://www.github.com/temiloluwa-js" className="my-2 transition-colors duration-300 hover:text-gray-600">
          Github
        </a>
        <a href="https://www.github.com/temiloluwa-js" className="my-2 transition-colors duration-300 hover:text-orange-600">
          Reddit
        </a>
      </div>

      {/* <div className="w-1/2 flex flex-col text-2xl sm:text-5xl m-32">
        <a href="https://www.twitter.com/temiloluwa_js">Twitter</a>
        <a href="https://www.github.com/temiloluwa-js">Github</a>
        <a href="https://www.github.com/temiloluwa-js">Reddit</a>
      </div>
      <div className="gradient m-32 sm:mt-96 font-extrabold w-1/2 sm:text-9xl grid place-content-center">
        <p>MISC</p>
      </div> */}
    </footer>
  );
}
