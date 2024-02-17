"use client"
import Menu from "./components/menu";
import Cart from "./components/cart";
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export default function Home() {

  const docRef = doc(FIRESTORE_DB, "Test", "OXo09hLH21wyVWZTCOYe");
  // Justs prints out cart for dev purposes
  const [itemsInCart, setItemsInCart] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      console.log(itemsInCart);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data()["Test"]);
    };
    fetchData();
  }, [itemsInCart]);
  


  //             const docSnap = await getDoc(docRef); setMasjidId(docSnap.data()["favMasjids"]);


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
