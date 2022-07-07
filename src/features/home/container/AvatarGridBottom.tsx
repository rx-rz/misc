import { useState } from "react";
import Button from "src/components/Button/Button";
import ProductCard from "src/components/Card/ProductCard";
import Marquee from "src/components/Marquee/Marquee";
import { getImage } from "../api/getImage";
import { ProductsOne } from "../api/productsOne";
import { ProductsTwo } from "../api/productsTwo";
export default function AvatarGridBottom() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full grid items-center">
      <Marquee>ALL AVAILABLE AVATARS ✌</Marquee>
      <div className="flex flex-wrap basis-7 md:basis-12 justify-center py-4 sm:py-8">
        {ProductsOne.map((product, index) => (
          <div className="m-4">
            <ProductCard
              imageUrl={getImage(product.name)}
              name={product.name.replace(/-/m, " ")}
              price={product.price}
            />
            <Button handleClick={() => setCount(0)}>Add To Cart</Button>
          </div>
        ))}
      </div>
      <Marquee>ALL AVAILABLE AVATARS ✌</Marquee>
      <div className="flex flex-wrap basis-7 md:basis-12 justify-center py-4 sm:py-8">
        {ProductsTwo.map((product, index) => (
          <div className="m-4">
            <ProductCard
              imageUrl={getImage(product.name)}
              name={product.name.replace(/-/m, " ")}
              price={product.price}
            />
            <Button handleClick={() => setCount(0)}>Add To Cart</Button>
          </div>
        ))}
      </div>
      <Marquee>ALL AVAILABLE AVATARS ✌</Marquee>
    </div>
  );
}
