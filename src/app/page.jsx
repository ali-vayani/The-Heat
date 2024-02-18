"use client"
import Menu from "./components/menu";
import Cart from "./components/cart";
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { getDocs, doc, collection } from "firebase/firestore";

export default function Home() {

  const menuRef = collection(FIRESTORE_DB, "Menu"); // To access firestore
  const [items, setItems] = useState([])
  const [itemsInCart, setItemsInCart] = useState([])

  // Justs prints out stuff for dev purposes
  useEffect(() => {
    console.log(itemsInCart)
    console.log(items)
  }, [itemsInCart, items]);

  // Fetches all menu item IDs and sets them
  useEffect(() => {
    getDocs(menuRef)
    .then((snapshot) => {
      // Map each document to its document ID
      const docIds = snapshot.docs.map(doc => doc.id);
      setItems(docIds) // Sets the document IDs to the state
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
  }, []);


  return (
   <div className="h-max flex items-center flex-col mb-8">
      <h1 className="text-9xl mt-16 mb-2"> The Heat </h1>
      <h2 className="text-7xl"> by <span className="text-accent">KCAL</span></h2>
      <div className="w-full flex mt-12 flex-1">
        <Menu setItems={setItemsInCart} itemsID={items}/>
        <Cart items={itemsInCart}/>
      </div>

   </div>
  );
}
