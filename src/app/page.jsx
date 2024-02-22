"use client"
import Link from 'next/link';
import Menu from "./components/menu";
import Cart from "./components/cart";
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { getDocs, doc, collection } from "firebase/firestore";
import OrderInfo from './components/subcomponents/orderInfo';
import Image from "next/image";
import { useRouter } from 'next/navigation';


export default function Home() {

  const menuRef = collection(FIRESTORE_DB, "Menu"); // To access firestore
  const [items, setItems] = useState([])
  const [itemsInCart, setItemsInCart] = useState([])

  const [name, setName] = useState('');
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(0);
  const [howEat, setHowEat] = useState('plated');
  const [howPay, setHowPay] = useState('card');

  const router = useRouter();
  const navigateToOrder = () => {
    localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
    // router.push('/order');
  };
  
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

    const savedStates = JSON.parse(localStorage.getItem('orderInfo'));

    // If data exists, update relevant states using savedStates
    if (savedStates) {
      setName(savedStates.name);
      setHour(savedStates.hour);
      setMinute(savedStates.minute);
      setHowEat(savedStates.howEat);
      setHowPay(savedStates.howPay);
    }
  }, []);


return (
   <div className="h-full flex items-center flex-col mb-8 brick-background">
      <Image
              src="/TheHeatLogo.png"
              alt="The Heat Logo"
              width={750}
              height={240}
              priority
            />
      <div className="w-full flex mt-12 backdrop-blur-sm xs:max-sm:flex-col xs:max-sm:items-center">
        <Menu setItems={setItemsInCart} itemsID={items} className="xs:max-sm:w-full"/>
        <Cart items={itemsInCart} className="xs:max-sm:w-full "/>
      </div>
      <h2 className=" mt-4 text-7xl mb-4 ">Order Info</h2>
      <OrderInfo onButtonClick={navigateToOrder}/>
      
      <button onClick={() => router.push('/admin')}>Go to Admin Dashboard</button>
   </div>
);

}
