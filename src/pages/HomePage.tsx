import React, { Suspense } from "react";

const AvatarGrid = React.lazy(
  () => import("src/features/home/container/AvatarGrid")
);
const AvatarGridBottom = React.lazy(
  () => import("src/features/home/container/AvatarGridBottom")
);
const DescriptionText = React.lazy(
  () => import("src/features/home/container/DescriptionText")
);
const IntroText = React.lazy(
  () => import("src/features/home/container/IntroText")
);

export default function HomePage() {
  return (
    <div className="flex flex-col w-fit  relative bg-tertiary dark:bg-slate-900  scrollbar-thumb-black">
      <div>
        <Suspense fallback={<div>Loading....</div>}>
          <IntroText />
          <AvatarGrid />
          <DescriptionText />
          <AvatarGridBottom />
        </Suspense>
      </div>
    </div>
  );
}
