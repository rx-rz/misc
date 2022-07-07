import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "src/components/Card/ProductCard";

type ProductDisplayProps = {
    name: string | undefined
}
export default function ProductDisplay({name}: ProductDisplayProps) {

  return (
    <div className="md:w-9/12" >
        <img src="" alt="" />
    </div>
  );
}
