'use client'
import { useEffect, useState } from "react";

export default function MenuItems({item, price, limit, setItems}) {
    const [amount, setAmount] = useState();

    return (
        <div className="bg-accent/50 w-11/12 h-28 flex justify-center items-center rounded-xl my-1.5">
            <div className="w-1/12 flex justify-center">
                <span className="text-5xl">{price}</span>    
            </div>
            <div className="w-4/5 flex justify-center">
                <span className="text-5xl">{item}</span>    
            </div>
            <div className="w-1/12 flex justify-center">
                <div className="flex text-3xl bg-primary px-3 rounded-3xl justify-center items-center">
                    <button onClick={() => setItems(prevState => [...prevState, {item}])}> + </button>
                    <div className="w-0.5 bg-text/50 h-full mx-1.5"></div>
                    <button className="text-4xl"> - </button>
                </div>           
            </div>             
        </div>
    )
}