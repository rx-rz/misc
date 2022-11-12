import { Button, SmallerProductCard } from "src/components";
import { getProductImagesForProductDisplay } from "../api/getProductImagesForProductDisplay";

const promptUrls = ["brouhaha", "inosuke", "tanjiro", "tenzin"];
type ProductImagesProps = {
  name: string | undefined;
  changeImageName: (name: string) => void;
};
export const ProductImages = ({
  name,
  changeImageName,
}: ProductImagesProps) => {
  return (
    <section
      className="flex justify-evenly md:flex-col
     md:w-2/12 items-center mt-6 -mb-6
     md:-mt-12 md:-mb-0"
    >
      {promptUrls.map((promptUrl, index) => (
        <Button handleClick={() => changeImageName(promptUrl)} key={index}>
          <SmallerProductCard
            imageUrl={getProductImagesForProductDisplay(name, promptUrl)}
          />
        </Button>
      ))}
    </section>
  );
};
