import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { getImage } from "../api/getImage";

const ProductCard = React.lazy(() => import('src/components/Elements/Card/ProductCard'))

export default function AvatarGrid() {
  return (
    <section className="flex  flex-wrap  md:basis-2 justify-center py-4 sm:py-8">
      <Suspense fallback={<p>Loading...</p>}>
        <Link to={"/big-ears/100"} className="m-12 ">
          <ProductCard
            imageUrl={getImage("big-ears")}
            name="big ears"
            price={100}
          />
        </Link>
        <Link to={"/bottts/100"} className="m-12">
          <ProductCard
            imageUrl={getImage("bottts")}
            name="bottts"
            price={100}
          />
        </Link>

        <Link to={"/personas/90"} className="m-12">
          <ProductCard
            imageUrl={getImage("personas")}
            name="personas"
            price={90}
          />
        </Link>
        <Link to={"/micah/80"} className="m-12">
          <ProductCard imageUrl={getImage("micah")} name="micah" price={80} />
        </Link>
      </Suspense>
    </section>
  );
}
