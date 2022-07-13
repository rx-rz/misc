
import AvatarGrid from "src/features/home/container/AvatarGrid";
import AvatarGridBottom from "src/features/home/container/AvatarGridBottom";
import DescriptionText from "src/features/home/container/DescriptionText";
import IntroText from "src/features/home/container/IntroText";

export default function HomePage() {
  return (
    <div className="flex flex-col w-fit  relative bg-tertiary dark:bg-slate-900  scrollbar-thumb-black">
      <div>
        <IntroText />
        <AvatarGrid />
        <DescriptionText />
        <AvatarGridBottom />
      </div>
      {/* <div className="w-80 sm:w-96 h-maximalHeight absolute right-0 top-0 dark:bg-gray-900 bg-slate-100 border-2">
        <CartList/>
      </div> */}
    </div>
  );
}
