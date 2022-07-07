import { Link } from "react-router-dom";
import ProductCard from "src/components/Card/ProductCard";
import { getImage } from "../api/getImage";

export default function AvatarGrid() {
  return (
    <div className="flex flex-wrap basis-7 md:basis-12 justify-center py-4 sm:py-8">
      <Link to={"/product/big-ears"} className="m-12 ">
        <ProductCard
          imageUrl={getImage("big-ears")}
          name="big ears"
          price={100}
        />
      </Link>
      <Link to={"/product/bottts"} className="m-12">
        <ProductCard imageUrl={getImage("bottts")} name="bottts" price={100} />
      </Link>

      <Link to={"/product/personas"} className="m-12">
        <ProductCard
          imageUrl={getImage("personas")}
          name="personas"
          price={90}
        />
      </Link>
      <Link to={"/product/micah"} className="m-12">
        <ProductCard imageUrl={getImage("micah")} name="micah" price={80} />
      </Link>
    </div>
  );
}
