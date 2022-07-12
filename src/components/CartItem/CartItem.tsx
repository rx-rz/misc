import { ProductProps } from "src/types/Product";
import { getImage } from "src/features/home/api/getImage";
import CartCounter from "../Counter/CartCounter";

export default function CartItem({ name, price }: ProductProps) {
  return (
    <div className="w-11/12 m-auto h-28 border-2 border-primary py-2 my-2 flex dark:text-slate-50 dark:border-primary">
      <img src={getImage(name)} alt={name} className="w-5/12"/>
      <aside className="w-7/12">
        <h1 className="font-extrabold text-xl ">{name}</h1>
        <h2 className="gradient font-bold text-lg">{price}</h2>
        <CartCounter/>
      </aside>
    </div>
  );
}
