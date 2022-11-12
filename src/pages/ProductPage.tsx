import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDisplay, ProductImages, ProductSettings } from "src/features";
import { Avatars } from "src/utils/avatars";
import ErrorPage from "./ErrorPage";

export default function ProductPage() {
  const { name = "x" } = useParams();
  const [imageName, setImageName] = useState("biscuit");

  document.title = `Misc Avatars: ${name}`;

  function changeImageName(name: string) {
    setImageName(name);
  }
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const avatarIndex = Avatars.find((e) => e.name === name);
  const avatarPrice = avatarIndex && avatarIndex.price;

  if (avatarPrice) {
    return (
      <main className=" dark:bg-gray-900 h-fit md:flex  md:min-h-screen">
        <ProductDisplay imageType={name} imageName={imageName} />
        <ProductImages name={name} changeImageName={changeImageName} />
        <ProductSettings name={name} price={avatarPrice} />
      </main>
    );
  } else {
    return <ErrorPage />;
  }
}
