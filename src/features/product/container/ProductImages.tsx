import React from "react";
import SmallerProductCard from "src/components/Card/SmallerProductCard";
import { getProductImagesForProductDisplay } from "../api/getProductImagesForProductDisplay";

const promptUrls = ["mako", "bolin", "asami", "tenzin"];
type ProductImagesProps = {
  name: string | undefined
  changeImageName: (name: string) => void;
};
export default function ProductImages({
  name,
  changeImageName,
}: ProductImagesProps) {
  return (
    <div className="flex justify-evenly md:flex-col md:w-3/12 items-center">
      {promptUrls.map((promptUrl, index) => (
        <button onClick={() =>changeImageName(promptUrl)} key={index}>
          <SmallerProductCard
            imageUrl={getProductImagesForProductDisplay(name, promptUrl)}

          />
          </button>
      ))}
    </div>
  );
}
