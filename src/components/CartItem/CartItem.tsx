import { ProductProps } from "src/types/Product";
import { getImage } from "src/features/home/api/getImage";
import { useStateContext } from "src/context/countContext";
import close from 'src/assets/close.svg'

export function CartItem({ name, price, quantity }: ProductProps) {
  const { toggleCartItemQuantity, removeItemFromCart } = useStateContext()!;
  return (
    <div className="w-full  m-auto border-l-2   my-8 flex font-AlbertSans justify-between dark:text-slate-50   border-l-primary items-center ">
      <img src={getImage(name)} alt={name} className="w-4/12 h-24 mr-4" />
      <aside className="w-8/12 flex justify-between h-full">
        <div className="w-6/12">
          <h1 className="font-bold text-2xl mb-5">{name}</h1>
          <h2 className="gradient font-bold text-lg">${price * quantity}</h2>
        </div>
        <div>
          <div className="flex justify-end">
            <button
              className="self-end mb-5"
              onClick={() => removeItemFromCart(name)}
            >
              <img src={close} width="20px" alt="Close" className="dark:invert"/>
            </button>
          </div>
          <div className="flex mb-1">
            <button
              onClick={() => toggleCartItemQuantity(name, "decrement")}
              className="border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1 transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              -
            </button>
            <p
              className="border-2 px-2 border-black border-l-0 border-r-0 font-medium dark:text-white dark:border-primary sm:px-3 sm:py-1"
              data-testid="quantity"
            >
              {quantity}
            </p>
            <button
              onClick={() => toggleCartItemQuantity(name, "increment")}
              className="border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1 transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              +
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
