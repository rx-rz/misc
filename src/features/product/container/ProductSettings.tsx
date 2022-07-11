import React, { useEffect } from "react";
import Counter from "src/components/Counter/Counter";
import { useStateContext } from "src/context/count-context";
type ProductSettingsProps = {
  name: string | undefined;
  price: number | string | undefined;
};

export default function ProductSettings({ name, price }: ProductSettingsProps) {
  const { onAdd, quantity, setQuantity } = useStateContext();
  useEffect(() => {
    if (quantity) {
      setQuantity(1);
    }
  }, []);
  const product = {
    name: name,
    price: price,
  };

  return (
    <div className="md:w-4/12 flex justify-center items-center  md:h-maximalHeight flex-col h-halfHeight ">
      <div className="w-5/6 lg:w-4/6  flex flex-col ">
        <h1 className="gradient text-4xl md:text-5xl font-medium py-3 lg:text-6xl w-5/6 m-auto">
          {name}
        </h1>
        <p className="text-2xl font-medium md:text-3xl lg:text-5xl dark:text-white mb-4 w-5/6 m-auto">
          ${price}
        </p>
        <div className="w-5/6 m-auto">
          <Counter />
        </div>
      </div>
      <div className="w-5/6 lg:w-4/6">
        <div className="w-5/6 m-auto">
        <button
          className="left-0 my-3  font-extrabold bg-primary  p-1 transition duration-300 hover:bg-secondary hover:text-white w-full sm:text-xl"
          onClick={() => onAdd(product, quantity)}
        >
          ADD TO CART
        </button>
        </div>
      </div>

      <div className="flex"></div>
    </div>
  );
}
