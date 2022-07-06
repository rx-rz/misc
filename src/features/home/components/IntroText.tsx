import React from "react";

export default function IntroText() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-gradient-to-r text-transparent from-primary via-secondary to-tertiary text-4xl md:text-4xl lg:text-6xl bg-clip-text w-1/2 max-w-xl  text-center font-bold pb-4 pt-6">Buy Cool Looking Avatars.</h1>
      <p className="text-sm text-center sm:text-md md:text-lg lg:text-xl w-3/4 py-8">
        Avatarsss is a generative art series designed to live on the
        Firebase blockchain and to be rendered in real-time by the browser. Just
        as food is transformed by microorganisms during the process of
        fermentation, the substrate of the HTML canvas is broken up into parts
        and transformed by cellular patterns. 
      </p>
    </div>
  );
}
