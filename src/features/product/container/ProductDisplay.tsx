import {getProductImages} from "src/features/product/api/getProductImages"
type ProductDisplayProps = {
    name: string | undefined
}
export default function ProductDisplay({name}: ProductDisplayProps) {

  return (

      <img className="md:w-8/12 object-cover md:h-maximalHeight" src={getProductImages(name)} alt={name}/>
    
  );
}
