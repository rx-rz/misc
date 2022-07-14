import { Link } from "react-router-dom";
import ProductCard from "src/components/Card/ProductCard/ProductCard";
import Marquee from "src/components/Marquee/Marquee";
import { getImage } from "../api/getImage";
import { ProductsOne } from "../api/productsOne";
export default function AvatarGridBottom() {
  return (
    <div className="w-full grid items-center py-8">
      <Marquee>ALL AVAILABLE AVATARS ✌</Marquee>
      <div className="flex flex-wrap basis-7 md:basis-12 justify-center py-20 sm:py-20">
        {ProductsOne.map((product, index) => (
          <Link to={`/${product.name}/${product.price}`} className="m-12" key={index}>
            <ProductCard
              imageUrl={getImage(product.name)}
              name={product.name.replace(/-/m, " ")}
              price={product.price}
            />

          </Link>
        ))}
      </div>
      <Marquee>ALL AVAILABLE AVATARS ✌</Marquee>
    </div>
  );
}
