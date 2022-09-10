import React from "react";
import { Button } from "src/components";
import { SmallerProductCard } from "src/components/Elements/Card/";
import { getProductImagesForProductDisplay } from "../api/getProductImagesForProductDisplay";

const promptUrls = ["biscuit", "inosuke", "tanjiro", "tenzin"];
type ProductImagesProps = {
  name: string | undefined;
  changeImageName: (name: string) => void;
};
export default function ProductImages({
  name,
  changeImageName,
}: ProductImagesProps) {
  return (
    <div className="flex justify-evenly md:flex-col md:w-2/12 items-center">
      {promptUrls.map((promptUrl, index) => (
        <Button handleClick={() => changeImageName(promptUrl)} key={index}>
          <SmallerProductCard
            imageUrl={getProductImagesForProductDisplay(name, promptUrl)}
          />
        </Button>
      ))}
    </div>
  );
}
