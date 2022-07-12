import { ProductProps } from "src/types/Product";
import { getImage } from "src/features/home/api/getImage";
import {useStateContext} from "src/context/count-context";

export default function CartItem({ name, price, quantity }: ProductProps) {
  const {toggleCartItemQuantity, removeItem} = useStateContext()
  return (
    <div className="w-11/12 m-auto h-fit border-2 border-primary py-2 my-2 flex dark:text-slate-50 dark:border-primary">
      <img src={getImage(name)} alt={name} className="w-5/12 h-24" />
      <aside className="w-7/12">
        <h1 className="font-extrabold text-xl ">{name}</h1>
        <h2 className="gradient font-bold text-lg">{price}</h2>
        <div>
          <div className="flex mb-1">
            <button onClick={() => toggleCartItemQuantity(name, 'dec')} className="border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1">
              -
            </button>
            <p className="border-2 px-2 border-black border-l-0 border-r-0 font-medium dark:text-white dark:border-primary sm:px-3 sm:py-1">
              {quantity}
            </p>
            <button onClick={() => toggleCartItemQuantity(name, 'inc')}  className="border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1">
              +
            </button>
          </div>
        </div>
        <div>
          <button onClick={() => removeItem(name)}>Comot</button>
        </div>
      </aside>
    </div>
  );
}
