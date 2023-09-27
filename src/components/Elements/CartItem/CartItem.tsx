import { ProductProps } from "src/types/Product";
import { getImage } from "src/features/home/api/getImage";
import { useCartContext } from "src/context/cartContext";
import { Button } from "../Button";

export function CartItem({ name, price, quantity }: ProductProps) {
  const { toggleCartItemQuantity, removeItemFromCart } = useCartContext()!;
  return (
    <article className="  w-full border border-secondary mx-auto font-AlbertSans">
      <div className="font-bold py-2 my-auto w-full border-r border-r-secondary flex justify-between ">
        <h1 className=" text-lg ml-4 dark:text-white  ">{name}</h1>
        <h2 className=" text-md mr-4 text-secondary">${price}</h2>
      </div>
      <img
        src={getImage(name)}
        alt={name}
        className="lg:h-50  w-full object-cover object-center"
      />
      <div className="flex w-full justify-between border border-secondary py-2">
        <div className="flex ml-4">
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
        <Button handleClick={() => removeItemFromCart(name)} className="w-fit mr-4">
          <img
            src="/assets/delete.svg"
            width="30px"
            title="Delete Item"
            alt="Close"
            className="dark:invert"
            data-testid="remove-button"
          />
        </Button>
      </div>
    </article>
  );
}
