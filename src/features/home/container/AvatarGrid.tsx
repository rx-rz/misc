import { Link } from "react-router-dom";
import { Avatars } from "src/utils/avatars";
import { getImage } from "../api/getImage";
import { ProductCard } from "src/components";

const homeAvatars = Avatars.slice(1, 5);
export const AvatarGrid = () => {
  return (
    <section className="flex  flex-wrap md:basis-2 justify-center py-4 sm:py-8">
      {homeAvatars &&
        homeAvatars.map((product) => (
          <Link to={`/${product.name}`} className="m-12 " key={product.name}>
            <ProductCard
              imageUrl={getImage(product.name)}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
    </section>
  );
};
