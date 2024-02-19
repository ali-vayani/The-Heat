import React, { useEffect, useState } from 'react';
import MenuItems from "./subcomponents/menuItems";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export default function Menu({ setItems, itemsID }) {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        //Gets stuff from DB
        const fetchMenuItems = async () => {
            const items = await Promise.all(itemsID.map(async (id) => {
                const docRef = doc(FIRESTORE_DB, "Menu", id);
                const docSnap = await getDoc(docRef);
                return { id, ...docSnap.data() };
            }));
            setMenuItems(items);
            console.log(items)
        };
        
        fetchMenuItems();
    }, [itemsID]); // Run when itemsID changes

    return (
        <div className="w-2/3 flex items-center ml-12 mr-6 pb-8 rounded-xl flex-col xs:max-sm:w-full">
            <h2 className=" mt-4 text-7xl mb-4 ">Menu</h2>
            { //Maps through the menu items and displays them
            menuItems.map((item, index) => (
                <MenuItems key={index} price={`$${parseFloat(item.price).toFixed(2)}`} item={item.item} setItems={setItems} id={item.id}/>
            ))}
        </div>
    );
}
