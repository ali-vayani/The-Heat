'use client'
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import SetUpMenu from "../components/setUpMenu";
import OrdersTable from "../components/ordersTable";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthGuard from "../components/AuthGaurd";

export default function Home() {
  const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const auth = getAuth();

    useEffect(() => {
      const checkAuth = () => {
          onAuthStateChanged(auth, (user) => {
              if (user) {
                  // User is signed in.
                  setIsLoggedIn(true);
                  setLoading(false);
              } else {
                  // No user is signed in.
                  setIsLoggedIn(false);
                  setLoading(false);
                  router.push('/login');
              }
          });
      };
  
      checkAuth();
  }, []);
  

    useEffect(() => {
        const fetchFromDB = async () => {
            const orderCol = collection(FIRESTORE_DB, "Orders");
            const orderSnapshot = await getDocs(orderCol);
            const orderList = orderSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOrders(orderList);
        };

        fetchFromDB();
    }, []);

    const goToMenuPage = () => {
        router.push('/');
    }

    if (loading) {
        return null; // Render nothing while loading
    }




  return (
    <AuthGuard>
    <div className="h-full flex items-center flex-col mb-8 brick-background">
      <Image
        src="/TheHeatLogo.png"
        alt="The Heat Logo"
        width={250}
        height={240}
        priority
      />
      <h1 className="text-9xl mt-8 mb-2 xs:max-sm:m-0 xs:max-sm:flex xs:max-sm:flex-col"> Admin Page </h1>
      <div className="w-full flex flex-col items-center justify-center mt-12 backdrop-blur-sm xs:max-sm:flex-col xs:max-sm:items-center">
        <SetUpMenu />
        {/* <OrdersTable orders={orders} /> */}
      </div>
      <div className="flex justify-center flex-1 bg-primary rounded-xl">
        <button onClick={goToMenuPage} className="text-3xl w-full p-4">Return back to Menu page</button>
      </div>
    </div>
    </AuthGuard>
  );
}
