import { ProductProps } from "src/types/Product";
import { getImage } from "src/features/home/api/getImage";
import { useStateContext } from "src/context/countContext";

export  function CartItem({ name, price, quantity }: ProductProps) {
  const { toggleCartItemQuantity, removeItem } = useStateContext()!;
  return (
    <div className="w-11/12 m-auto h-fit  border-2 rounded-md border-primary py-3 my-2 flex font-AlbertSans justify-between dark:text-slate-50 dark:border-primary items-center">
      <img src={getImage(name)} alt={name} className="w-4/12 h-24 mr-4" />
      <aside className="w-8/12">
        <div>
          <h1 className="font-bold text-2xl ">{name}</h1>
          <h2 className="gradient font-bold text-lg">{price}</h2>
        </div>
        <div>
          <div className="flex mb-1">
            <button
              onClick={() => toggleCartItemQuantity(name, "dec")}
              className="border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1 transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              -
            </button>
            <p className="border-2 px-2 border-black border-l-0 border-r-0 font-medium dark:text-white dark:border-primary sm:px-3 sm:py-1">
              {quantity}
            </p>
            <button
              onClick={() => toggleCartItemQuantity(name, "inc")}
              className="border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1 transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              +
            </button>
          </div>
        </div>
        <div>
          <button onClick={() => removeItem(name)}>Remove Item</button>
        </div>
      </aside>
    </div>
  );
}
