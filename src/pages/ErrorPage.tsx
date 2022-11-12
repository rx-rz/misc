export default function ErrorPage() {
  document.title = "Misc Avatars: 404";
  return (
    <div
      className="min-h-maximalHeight flex items-center 
      justify-center flex-col  text-secondary"
    >
      <h1
        className=" text-4xl md:text-6xl text-center
       w-11/12 font-bold"
      >
        404. PAGE NOT FOUND.
      </h1>
      <img
        src="/assets/404.svg"
        alt="Page Not Found"
        height="500px"
        width="500px"
        className="dark:invert"
      />
      <a
        href="/"
        className="border-b-2  dark:border-b-white
       text-3xl"
      >
        Go Home
      </a>
    </div>
  );
}
