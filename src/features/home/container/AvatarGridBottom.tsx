import { useState } from "react";
import Button from "src/components/Button/Button";
import ProductCard from "src/components/Card/ProductCard";
import Marquee from "src/components/Marquee/Marquee";
import { getImage } from "../api/getImage";
import { ProductsOne } from "../api/productsOne";
export default function AvatarGridBottom() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full">
      <Marquee>ALL AVAILABLE AVATARS ✌</Marquee>
      <div className="">
      
        {ProductsOne.map((product, index) => (
          <div className="">
            <ProductCard
              imageUrl={getImage(product.name)}
              name={product.name.replace(/-/m, " ")}
              price={product.price}
            />
            <Button handleClick={() => setCount(0)}>Add To Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
