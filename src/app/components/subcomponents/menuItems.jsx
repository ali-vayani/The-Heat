'use client'
import { useEffect, useState } from "react";

export default function MenuItems({item, price, setItems, id}) {
    const [amount, setAmount] = useState();

    return (
        <div className="bg-primary w-11/12 h-28 flex justify-center items-center rounded-xl my-1.5">
            <div className="w-1/12 flex justify-center ml-2">
                <span className="text-3xl">{price}</span>    
            </div>
            <div className="w-4/5 flex justify-center text-center">
                <span className="text-4xl">{item}</span>    
            </div>
            <div className="w-1/12 flex justify-center">
                <div className="flex text-3xl bg-accent px-3 rounded-xl justify-center items-center">
                    <button onClick={() => setItems(prevState => [...prevState, {id}])}> + </button>
                    <div className="w-0.5 bg-text/50 h-full mx-1.5"></div>
                    <button onClick={() => setItems(prevState => prevState.filter((item, index, arr) => {
                            // Find the index of the item to remove
                            const itemToRemoveIndex = arr.findIndex(i => i.id === id);
                            // Remove the item if its index matches the current index
                            return index !== itemToRemoveIndex;
                        }))}> 
                    - </button>
                </div>           
            </div>             
        </div>
    )
}