import { getProductImages } from "src/features/product/api/getProductImages";
type ProductDisplayProps = {
  imageType: string | undefined;
  imageName: string | undefined;
};

export default function ProductDisplay({
  imageType,
  imageName,
}: ProductDisplayProps) {
  return (
    <div className="md:w-5/12 rounded-b-xl">
      <img
        className="object-center object-cover md:h-maximalHeight rounded-b-3xl md:rounded-none"
        src={getProductImages(imageType, imageName)}
        alt={imageType}
      />
    </div>
  );
}
