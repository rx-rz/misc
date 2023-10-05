import { useLayoutEffect, useRef, useState } from "react";
import { Avatars } from "src/utils/avatars";

const permittedNames = Avatars.map((e) => e.name);
type Name = (typeof permittedNames)[number];

type CardProps = {
  name?: Name;
  price?: number;
  imageUrl: string;
};

export function ProductCard({ name, price, imageUrl }: CardProps) {
  // const articleRef = useRef<HTMLElement | null>(null);
  // const [isVisible, setIsVisible] = useState(false);
  // useLayoutEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     setIsVisible(entry.isIntersecting);
  //   });
  //   if (articleRef) {
  //     observer.observe(articleRef.current);
  //     articleRef.current?.classList.add("animate")

  //   }
  //   return () => observer.disconnect();
  // }, [isVisible]);
  return (
    <article
      className="w-40 sm:w-48 md:w-44 lg:w-80 transition-all
      duration-300 hover:translate-x-3 hover:-translate-y-3 product_card
      hover:shadow-sm shadow-primary dark:shadow-tertiary border dark:bg-tertiary"
      // ref={articleRef}
    >
      <img
        data-testid="product-image"
        className="w-fit transition-shadow duration-300
      hover:shadow-secondary "
        alt={name}
        src={imageUrl}
        loading="lazy"
      />
      <div
        className="text-primary bottom-0 sm:flex sm:items-center dark:bg-primary
        sm:justify-between font-AlbertSans p-2 border-2 border-primary dark:text-tertiary"
      >
        <p data-testid="product-name" className=" font-extrabold text-xl">
          {name}
        </p>
        {price && (
          <p
            className="dark:text-tertiary font-extrabold"
            test-id="product-price"
          >
            ${price}
          </p>
        )}
      </div>
    </article>
  );
}
