import  { Suspense } from "react";
import AvatarGrid from "src/features/home/container/AvatarGrid";
import AvatarGridBottom from "src/features/home/container/AvatarGridBottom";
import DescriptionText from "src/features/home/container/DescriptionText";
import IntroText from "src/features/home/container/IntroText";

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
