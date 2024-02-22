"use client"
// import Link from 'next/link';
// import Menu from "./components/menu";
// import Cart from "./components/cart";
// import { useEffect, useState } from "react";
// import { FIRESTORE_DB } from "../../firebaseConfig";
// import { getDocs, doc, collection } from "firebase/firestore";
// // import TheHeatLogo from './TheHeatLogo.png'; // Adjust the relative path as necessary
import Image from "next/image";
import SetUpMenu from "../components/setUpMenu";
import { useRouter } from 'next/navigation';



export default function Home() {

  const DestinationPage = () => {
    const router = useRouter();
    const { key } = router.query; // Access query parameters
  
    console.log(key)
  };

//   const menuRef = collection(FIRESTORE_DB, "Menu"); // To access firestore
//   const [items, setItems] = useState([])
//   const [itemsInCart, setItemsInCart] = useState([])

//   // Justs prints out stuff for dev purposes
//   useEffect(() => {
//     console.log(itemsInCart)
//     console.log(items)
//   }, [itemsInCart, items]);

//   // Fetches all menu item IDs and sets them
//   useEffect(() => {
//     getDocs(menuRef)
//     .then((snapshot) => {
//       // Map each document to its document ID
//       const docIds = snapshot.docs.map(doc => doc.id);
//       setItems(docIds) // Sets the document IDs to the state
//     })
//     .catch((error) => {
//       console.error("Error getting documents: ", error);
//     });
//   }, []);


return (
   <div className="h-full flex items-center flex-col mb-8 brick-background">
       <Image
              src="/TheHeatLogo.png"
              alt="The Heat Logo"
              width={250}
              height={240}
              priority
            />
            <h1 className="text-9xl mt-8 mb-2"> Admin Page </h1>
      <div className="w-full flex mt-12 backdrop-blur-sm xs:max-sm:flex-col xs:max-sm:items-center">
        <SetUpMenu/>
      </div>
   </div>
);

}
