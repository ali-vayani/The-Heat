'use client'
import { useEffect, useState } from "react";

export default function MenuItems({item, price, setItems, id}) {
    const [amount, setAmount] = useState();

    return (
        <div className="bg-primary w-11/12 h-28 flex justify-center items-center rounded-xl my-1.5 xs:max-sm:flex-col">
            <div className="w-1/12 flex justify-center ml-2">
                <span className="text-3xl xs:max-sm:text-lg">{price}</span>    
            </div>
            <div className="w-4/5 flex justify-center text-center ">
                <span className="text-4xl xs:max-sm:text-lg">{item}</span>    
            </div>
            <div className="w-1/12 flex justify-center xs:max-sm:w-6/12 h-8">
                <div className="flex text-3xl bg-accent px-3 rounded-xl justify-center items-center xs:max-sm:text-2xl flex-1 justify-evenly">
                    <button className="xs:max-sm:flex w-1/2 justify-center" onClick={() => setItems(prevState => [...prevState, {id}])}> + </button>
                    <div className="w-0.5 bg-text/50 h-full mx-1.5"></div>
                    <button className="xs:max-sm:flex w-1/2 justify-center" onClick={() => setItems(prevState => prevState.filter((item, index, arr) => {
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