"use client"
import { useState } from "react";
import { FIRESTORE_DB } from "../../../../firebaseConfig";
import { doc, setDoc, deleteDoc } from "firebase/firestore";


export default function EditMenuItem({ setItems, items, prices, id, setListOfIDs}) {
    const [item, setItem] = useState(items);
    const [price, setPrice] = useState(prices);
    const [isEditable, setIsEditable] = useState(false)

    const handleSubmit = async () => {
        // Validate the input
        if (!item || !price) {
            alert("Please fill out all fields correctly.");
            return;
        }

        const newItem = { item, price };
        await setDoc(doc(FIRESTORE_DB, "newMenu", id), {
            newItem
          });
        setIsEditable(false)
    };
    const handleDelete = async () => {
        if(confirm("Are you sure you want to delete this item?")) {
            await deleteDoc(doc(FIRESTORE_DB, "newMenu", id));
            setListOfIDs(prevIDs => prevIDs.filter(currentId => currentId !== id));
        }
    };

    if(!isEditable)
    {
        return (
            <div className="bg-primary w-11/12 h-auto flex flex justify-center items-center rounded-xl my-1.5 p-4 text-text">
                <div className="text-2xl p-2 rounded my-2 w-4/12 mx-2">{item}</div>
                <div className="text-2xl p-2 rounded my-2 w-4/12 mx-2">${price}</div>
                <button
                    className="bg-accent text-xl p-2 rounded my-2 w-4/12 mx-2 text-text"
                    onClick={() => setIsEditable(true)}
                >
                    Edit Item
                </button>
                <button
                    className="bg-redd text-xl p-2 rounded my-2 w-4/12 mx-2 text-text"
                    onClick={handleDelete}
                >
                    Delete Item
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
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />
            <input
                className="text-2xl p-2 rounded my-2 w-4/12 mx-2"
                type="number"
                placeholder="Price ($)"
                value={price}
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
