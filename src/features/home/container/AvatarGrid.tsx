import { Link } from "react-router-dom";
import { Avatars } from "src/utils/avatars";
import { getImage } from "../api/getImage";
import { ProductCard } from "src/components";
import { useEffect, useRef, useState } from "react";

const homeAvatars = Avatars.slice(1, 5);
export const AvatarGrid = () => {
  //react js intersection observer code.
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((entry) => {

          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 1 }
    );

    console.log(isVisible);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, [sectionRef, isVisible]);
  return (
    <section
      className="flex  flex-wrap md:basis-2 justify-center py-4 sm:py-8 home"
      ref={sectionRef}
    >
      {homeAvatars &&
        homeAvatars.map((product) => (
          <Link to={`/${product.name}`} className="m-12" key={product.name}>
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
