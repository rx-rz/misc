import { Suspense } from "react";
import {
  AvatarGrid,
  AvatarGridBottom,
  DescriptionText,
  IntroText,
} from "src/features";

export default function HomePage() {
  return (
    <main
      className="flex flex-col w-fit  relative bg-tertiary
    dark:bg-primary  scrollbar-thumb-black"
    >
      <Suspense fallback={<div>Loading....</div>}>
        <IntroText />
        <AvatarGrid />
        <DescriptionText />
        <AvatarGridBottom />
      </Suspense>
    </main>
  );
}
