"use client"
import { useState } from "react";

export default function AddMenuItem({ setItems, input }) {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState(1); // Assuming you want to start with 1 by default

    const handleSubmit = () => {
        // Validate the inputs as needed
        if (!item || !price) {
            alert("Please fill out all fields correctly.");
            return;
        }

        const newItem = { item, price };
        setItems(prevState => [...prevState, newItem]);

        // Reset the form fields
        setItem('');
        setPrice('');
    };

    if(input == true)
    {
        return (
            <div className="bg-primary w-11/12 h-auto flex flex justify-center items-center rounded-xl my-1.5 p-4">
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
                    className="bg-accent text-xl p-2 rounded my-2 w-4/12 mx-2"
                    onClick={handleSubmit}
                >
                    Add Item
                </button>
            </div>
        );
    } else {
        return (
            <div className="bg-primary w-11/12 h-auto flex flex-col justify-center items-center rounded-xl my-1.5 p-4">
                <button
                    className="bg-accent text-3xl p-2 rounded-full w-14 h-14"
                    onClick={handleSubmit}
                >
                    +
                </button>
            </div>
        );
    }

}
