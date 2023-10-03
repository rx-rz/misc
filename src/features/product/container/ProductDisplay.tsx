import { getProductImages } from "src/features/product/api/getProductImages";
type ProductDisplayProps = {
  name: string | undefined;
};

export const ProductDisplay = ({ name }: ProductDisplayProps) => {
  return (
    <main className="md:w-5/12 rounded-b-xl">
      <img
        className="object-center object-contain  md:h-maximalHeight
         rounded-b-3xl md:rounded-none dark:bg-tertiary mx-auto"
        src={getProductImages(name)}
        alt={name}
      />
    </main>
  );
};
