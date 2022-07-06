import { Link } from "react-router-dom";
import ProductCard from "src/components/Card/ProductCard";
import { getImage } from "../api/getImage";

export default function AvatarGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-content-center gap-8 w-fit m-auto py-8">
      <Link to={"/product/big-ears"}>
        <ProductCard
          imageUrl={getImage("big-ears")}
          name="Big Ears"
          price={100}
        />
      </Link>
      <Link to={"/product/bottts"}>
        <ProductCard imageUrl={getImage("bottts")} name="Bottts" price={100} />
      </Link>

      <Link to={"/product/personas"}>
        <ProductCard
          imageUrl={getImage("personas")}
          name="Personas"
          price={90}
        />
      </Link>
      <Link to={"/product/micah"}>
        <ProductCard imageUrl={getImage("micah")} name="Micah" price={80} />
      </Link>
      <Link to={"/product/adventurer"}>
        <ProductCard
          imageUrl={getImage("adventurer")}
          name="Adventurer"
          price={150}
        />
      </Link>
      <Link to={"/product/miniavs"}>
        <ProductCard
          imageUrl={getImage("miniavs")}
          name="Miniavs"
          price={200}
        />
      </Link>
      <Link to={"/product/big-smile"}>
        <ProductCard
          imageUrl={getImage("big-smile")}
          name="Big Smile"
          price={150}
        />
      </Link>
      <Link to={"/product/jdenticon"}>
        <ProductCard
          imageUrl={getImage("jdenticon")}
          name="Jdenticon"
          price={200}
        />
      </Link>
    </div>
  );
}
