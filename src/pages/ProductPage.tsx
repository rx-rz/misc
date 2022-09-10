import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDisplay from "src/features/product/container/ProductDisplay";
import ProductImages from "src/features/product/container/ProductImages";
import ProductSettings from "src/features/product/container/ProductSettings";
import { Avatars } from "src/utils/avatars";
import ErrorPage from "./ErrorPage";

export default function ProductPage() {
  const { name = "x" } = useParams();
  const { price = "" } = useParams();
  const [imageName, setImageName] = useState("biscuit");

  function changeImageName(name: string) {
    setImageName(name);
  }
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const permittedNames = Avatars.map((e) => e.name);
  const permittedPrices = Avatars.map((e) => e.price);

  const listsIncludeParams =
    permittedNames.includes(name) && permittedPrices.includes(parseInt(price));

  if (listsIncludeParams) {
    return (
      <div className=" dark:bg-gray-900 h-fit md:flex  md:min-h-screen">
        <ProductDisplay imageType={name} imageName={imageName} />
        <ProductImages name={name} changeImageName={changeImageName} />
        <ProductSettings name={name} price={price} />
      </div>
    );
  } else {
    return <ErrorPage />;
  }
}
