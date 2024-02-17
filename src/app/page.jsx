"use client"
import Menu from "./components/menu";
import Cart from "./components/cart";
import { useEffect, useState } from "react";

export default function Home() {

  // Justs prints out cart for dev purposes
  const [itemsInCart, setItemsInCart] = useState([])
  useEffect(() => {
    console.log(itemsInCart);
  }, [itemsInCart])


  return (
   <div className="h-max flex items-center flex-col mb-8">
      <h1 className="text-9xl mt-16 mb-2"> The Heat </h1>
      <h2 className="text-7xl"> by <span className="text-accent">KCAL</span></h2>
      <div className="w-full flex mt-12 flex-1">
        <Menu setItems={setItemsInCart}/>
        <Cart items={itemsInCart}/>
      </div>

   </div>
  );
}
