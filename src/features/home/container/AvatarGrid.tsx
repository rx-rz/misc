import { Link } from "react-router-dom";
import ProductCard from "src/components/Card/ProductCard";
import { getImage } from "../api/getImage";

export default function AvatarGrid() {
  return (
    <div className="flex flex-wrap basis-7 md:basis-12 justify-center py-4 sm:py-8">
      <Link to={"/product/big-ears"} className="m-12">
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
      <Link to={"/product/adventurer"} className="m-12">
        <ProductCard
          imageUrl={getImage("adventurer")}
          name="adventurer"
          price={150}
        />
      </Link>
      <Link to={"/product/miniavs"} className="m-12">
        <ProductCard
          imageUrl={getImage("miniavs")}
          name="miniavs"
          price={200}
        />
      </Link>
      <Link to={"/product/big-smile"} className="m-12">
        <ProductCard
          imageUrl={getImage("big-smile")}
          name="big smile"
          price={150}
        />
      </Link>
      <Link to={"/product/jdenticon"} className="m-12">
        <ProductCard
          imageUrl={getImage("jdenticon")}
          name="jdenticon"
          price={200}
        />
      </Link>
    </div>
  );
}
