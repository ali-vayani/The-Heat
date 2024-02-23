"use client"
import Link from 'next/link';
import Menu from "./components/menu";
import Cart from "./components/cart";
import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { getDocs, doc, collection } from "firebase/firestore";
import OrderInfo from './components/subcomponents/orderInfo';
import Image from "next/image";
import { useRouter } from 'next/router';
// import { google } from 'googleapis';
// import axios from 'axios';


export default function Home() {

  const menuRef = collection(FIRESTORE_DB, "Menu"); // To access firestore
  const [items, setItems] = useState([])
  const [total, setTotal] = useState()
  const [itemsInCart, setItemsInCart] = useState([])

  // const { google } = require('googleapis');

  // const router = useRouter();

  const [name, setName] = useState('');
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(0);
  const [howEat, setHowEat] = useState('plated');
  const [howPay, setHowPay] = useState('card');


  const apiKey = 'AIzaSyA20mZPhBufcl6Oh6Z76VwC_sv8fu4yPT4';



  const targetSpreadsheetId = '1_RQN8NoETINGoCZdIFTpZyw6VMAFmrWr3EAz7Dl3VNU';
  const sourceRange = 'Sheet1!A1:Z100';

  const navigateToOrder = () => {
    localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
    // exportDataToGoogleSheet();
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

  }, []);

  // useEffect(() => {
  //   const localStorageData = JSON.parse(localStorage.getItem('orderInfo'));
  //   if (!localStorageData) {
  //     console.error("Data not found in localStorage");
  //     return;
  //   }

  //   const values = localStorageData.map(row => {
  //     return { values: row };
  //   });

  //   const auth = new google.auth.GoogleAuth({
  //     apiKey: apiKey,
  //   });
  //   const sheets = google.sheets({ version: 'v4', auth });

  //   sheets.spreadsheets.values.update({
  //     spreadsheetId: targetSpreadsheetId,
  //     range: 'Sheet1',
  //     valueInputOption: 'RAW',
  //     resource: { values: values },
  //   }).then(response => {
  //     console.log('Data copied successfully');
  //   }).catch(error => {
  //     console.error('Error updating spreadsheet:', error);
  //   });
  // }, []);

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
        <Cart items={itemsInCart} className="xs:max-sm:w-full " setTotalForHome={setTotal}/>
      </div>
      <h2 className=" mt-4 text-7xl mb-4 ">Order Info</h2>
      <OrderInfo orderIDs={itemsInCart} total={total}/>
      
      <Link href={"/admin"}>Go to Admin Dashboard</Link>
   </div>
);

}
