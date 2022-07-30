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
    </footer>
  );
}
