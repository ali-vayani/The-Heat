"use client"
import { useState } from "react";
import { FIRESTORE_DB } from "../../../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore"; 

export default function EditMenuItem({ setItems, items, prices, id }) {
    const [item, setItem] = useState(items);
    const [price, setPrice] = useState(prices);
    const [isEditable, setIsEditable] = useState(false)

    const handleSubmit = async () => {
        // Validate the inputs as needed
        if (!item || !price) {
            alert("Please fill out all fields correctly.");
            return;
        }

        const newItem = { item, price };
        await setDoc(doc(FIRESTORE_DB, "newMenu", id), {
            newItem
          });
        // setItems(prevState => [...prevState, newItem]);

        setIsEditable(false)

    };

    if(!isEditable)
    {
        return (
            <div className="bg-primary w-11/12 h-auto flex flex justify-center items-center rounded-xl my-1.5 p-4 text-text">
                <div className="text-2xl p-2 rounded my-2 w-4/12 mx-2">{items}</div>
                <div className="text-2xl p-2 rounded my-2 w-4/12 mx-2">${prices}</div>
                <button
                    className="bg-accent text-xl p-2 rounded my-2 w-4/12 mx-2 text-text"
                    onClick={() => setIsEditable(true)}
                >
                    Edit Item
                </button>
            </div>
        );
    } else {
        return (
            <div className="bg-primary w-11/12 h-auto flex flex justify-center items-center rounded-xl my-1.5 p-4 text-primary">
            <input
                className="text-2xl p-2 rounded my-2 w-4/12 mx-2"
                type="text"
                placeholder="Item name"
                value={items}
                onChange={(e) => setItem(e.target.value)}
            />
            <input
                className="text-2xl p-2 rounded my-2 w-4/12 mx-2"
                type="text"
                placeholder="Price"
                value={prices}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button
                className="bg-accent text-xl p-2 rounded my-2 w-4/12 mx-2 text-text"
                onClick={handleSubmit}
            >
                Confirm Edit
            </button>
        </div>
        );
    }

}
