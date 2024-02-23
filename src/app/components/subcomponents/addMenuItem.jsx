"use client"
import { useState } from "react";
import { FIRESTORE_DB } from "../../../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore"; 

export default function AddMenuItem({ setItems, setDbID }) {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState(100000 + Math.floor(Math.random()*10));

    const handleSubmit = async () => {
        // Validate the inputs as needed
        if (!item || !price) {
            alert("Please fill out all fields correctly.");
            return;
        }

        const newItem = { item, price };
        await setDoc(doc(FIRESTORE_DB, "newMenu", id.toString()), {
            newItem
          });
        setItems(prevState => [...prevState, newItem]);
        setDbID(prevState => [...prevState, id]);
        console.log("SET ID")

        

        // Reset the form fields
        setItem('');
        setPrice('');
        setId(1000000000 + Math.floor(Math.random()*1000000000));
    };


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
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button
                className="bg-accent text-xl p-2 rounded my-2 w-4/12 mx-2 text-text"
                onClick={handleSubmit}
            >
                Add Item
            </button>
        </div>
    );

}
