import { ProductProps } from "src/types/Product";
import { getImage } from "src/features/home/api/getImage";
import { useStateContext } from "src/context/countContext";
import close from "src/assets/delete.svg";
import { Button } from "../Button";

export function CartItem({ name, price, quantity }: ProductProps) {
  const { toggleCartItemQuantity, removeItemFromCart } = useStateContext()!;
  return (
    <article className="w-full  m-auto shadow-lg my-4  flex font-AlbertSans justify-evenly dark:text-slate-50   items-center border-2 border-primary">
      <img src={getImage(name)} alt={name} className="w-3/12 h-24" loading="lazy"/>
      <aside className="w-9/12 flex justify-between items-center h-full">
        <div className="w-6/12">
        <h1 className="font-bold text-2xl  ml-3 m-auto">{name}</h1>
        <h2 className="gradient font-bold text-lg  ml-2">${price * quantity}</h2>
        </div>
        <div className="flex mb-1 mx-auto w-3/12  mr-3 justify-evenly">
          <Button
            handleClick={() => toggleCartItemQuantity(name, "decrement")}
            className="px-2 font-extrabold dark:text-white  sm:px-3 sm:py-1   "
          >
            -
          </Button>
          <p
            className="border-2 px-2 border-slate-700 rounded-md font-medium dark:text-white dark:border-primary sm:px-3 sm:py-1"
            data-testid="quantity"
          >
            {quantity}
          </p>
          <Button
            handleClick={() => toggleCartItemQuantity(name, "increment")}
            className="px-2 font-extrabold dark:text-white  sm:px-3 sm:py-1"
          >
            +
          </Button>
        </div>
        <Button  handleClick={() => removeItemFromCart(name)} className="w-1/12 m-auto">
          <img src={close} width="20px" alt="Close" className="dark:invert mr-2" />
        </Button>
      </aside>
    </article>
  );
}
