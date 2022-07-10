import React from "react";
import CartList from "src/features/cart/CartList";
import AvatarGrid from "src/features/home/container/AvatarGrid";
import AvatarGridBottom from "src/features/home/container/AvatarGridBottom";
import DescriptionText from "src/features/home/container/DescriptionText";
import IntroText from "src/features/home/container/IntroText";

export default function HomePage() {
  return (
    <div className="dark:bg-gray-900 flex flex-col w-fit bg-slate-100 relative">
      <div>
        <IntroText />
        <AvatarGrid />
        <DescriptionText />
        <AvatarGridBottom />
      </div>
      <div className="w-80 sm:w-96 h-maximalHeight absolute right-0 top-0 dark:bg-gray-900 bg-slate-100 border-2">
        <CartList/>
      </div>
    </div>
  );
}
