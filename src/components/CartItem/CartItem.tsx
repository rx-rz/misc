import { ProductProps } from "src/types/Product";
import { getImage } from "src/features/home/api/getImage";
import Button from "../Button/Button";

export default function CartItem({ name, price }: ProductProps) {
  return (
    <div className="w-11/12 m-auto h-24 border-2 my-2 flex">
      <img src={getImage(name)} alt={name} className="w-5/12"/>
      <aside className="w-7/12">
        <h1 className="font-extrabold text-xl ">{name}</h1>
        <h2 className="gradient font-bold text-lg">{price}</h2>
      </aside>
    </div>
  );
}
