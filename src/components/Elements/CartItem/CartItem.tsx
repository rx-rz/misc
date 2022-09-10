import { ProductProps } from "src/types/Product";
import { getImage } from "src/features/home/api/getImage";
import { useCartContext } from "src/context/cartContext";
import close from "src/assets/delete.svg";
import { Button } from "../Button";

export function CartItem({ name, price, quantity }: ProductProps) {
  const { toggleCartItemQuantity, removeItemFromCart } = useCartContext()!;
  return (
    <article className="  w-full border border-secondary mx-auto">
      <img
        src={getImage(name)}
        alt={name}
        className="lg:h-50  w-full object-cover object-center"
      />
      <div className="flex w-full h-20 border border-secondary ">
        <div className="font-bold my-auto w-6/12 border-r border-r-secondary">
          <h1 className="ml-3 text-lg dark:text-white ">{name}</h1>
          <h2 className="ml-3 text-md text-secondary">${price}</h2>
        </div>
        <div className="font-bold my-auto w-6/12 flex">
          <div className="mx-auto flex">
            <Button
              handleClick={() => toggleCartItemQuantity(name, "decrement")}
              className="px-2 font-extrabold dark:text-white  sm:px-3 sm:py-1 "
            >
              -
            </Button>
            <p
              className="border-2 px-2 border-slate-700 rounded-md font-medium 
              dark:text-white dark:border-primary sm:px-3 sm:py-1"
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
          <Button
            handleClick={() => removeItemFromCart(name)}
            className="w-1/12 m-auto"
          >
            <img
              src={close}
              width="20px"
              title="Delete Item"
              alt="Close"
              className="dark:invert mr-2"
              data-testid="remove-button"
            />
          </Button>
        </div>
      </div>
    </article>
  );
}
