"use client"
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { doc, collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import SetUpMenu from "../components/setUpMenu";
import OrdersTable from "../components/ordersTable";



export default function Home() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchFromDB = async () => {
      const orderCol = collection(FIRESTORE_DB, "Orders"); // Reference to the 'Order' collection
      const orderSnapshot = await getDocs(orderCol); // Fetch all documents within the 'Order' collection
      const orderList = orderSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map each document to an object
      setOrders(orderList); // Update state with the fetched orders
      console.log("order")
      console.log(orders);
    };

    fetchFromDB();
  }, []);

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
      <div className="w-full flex flex-col items-center justify-center mt-12 backdrop-blur-sm xs:max-sm:flex-col xs:max-sm:items-center">
        <SetUpMenu/>
        <OrdersTable orders={orders}/>
      </div>
   </div>
);

}
