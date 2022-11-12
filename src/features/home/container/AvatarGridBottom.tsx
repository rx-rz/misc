import { Link } from "react-router-dom";
import { getImage } from "../api/getImage";
import { Avatars } from "src/utils/avatars";
import { ProductCard, Marquee } from "src/components";

export const AvatarGridBottom = () => {
  return (
    <section className="w-full grid items-center py-8">
      <Marquee>ALL AVAILABLE AVATARS ✌</Marquee>
      <div
        className="flex flex-wrap basis-7 md:basis-12
       justify-center py-20 sm:py-20"
      >
        {Avatars.map((avatar, index) => (
          <Link to={`/${avatar.name}`} className="m-12" key={index}>
            <ProductCard
              imageUrl={getImage(avatar.name)}
              name={avatar.name.replace(/-/m, " ")}
              price={avatar.price}
            />
          </Link>
        ))}
      </div>
      <Marquee>ALL AVAILABLE AVATARS ✌</Marquee>
    </section>
  );
}
