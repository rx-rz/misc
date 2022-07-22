import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="h-52 sm:h-96 dark:bg-gray-900 flex border-t-2 border-primary">
      <div className="text-2xl sm:text-5xl flex flex-col justify-center w-1/2 text-center dark:text-white ">
        <a
          href="https://www.twitter.com/temiloluwa_js"
          className="my-2 transition-colors duration-300 hover:text-blue-600"
        >
          Twitter
        </a>
        <a
          href="https://www.github.com/temiloluwa-js"
          className="my-2 transition-colors duration-300 hover:text-gray-600"
        >
          Github
        </a>
        <a
          href="https://www.github.com/temiloluwa-js"
          className="my-2 transition-colors duration-300 hover:text-orange-600"
        >
          Reddit
        </a>
      </div>
      <div className="text-6xl font-extrabold grid place-content-center gradient w-1/2 sm:text-9xl">
        {" "}
        <Link to="/"> MISC</Link>
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
