import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "src/components/Card/ProductCard";
import { getListUrls } from "../api/getProductImages";

type ProductDisplayProps = {
    name: string | undefined
}
export default function ProductDisplay({name}: ProductDisplayProps) {
  const listUrls = getListUrls(name);
  return (
    <div className="flex flex-wrap basis-7 md:basis-12 justify-evenly py-4 sm:py-8">
      {listUrls.map((listUrl) => (
        <ProductCard imageUrl={listUrl} />
      ))}
    </div>
  );
}
