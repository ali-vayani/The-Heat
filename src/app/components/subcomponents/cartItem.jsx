'use client'

export default function CartItems({item, price, quantity}) {

    return (
        <div className="bg-accent/50 w-11/12 h-16 flex justify-evenly items-center rounded-xl my-1">
            <div className="">
                <span className="text-xl">{item}</span>    
            </div>
            <div className="w-2/12 flex ">
                <span className="text-xl">{quantity}</span>    
            </div>  
            <div className="w-2/12 flex">
                <span className="text-xl">{price}</span>    
            </div>       
        </div>
    )
}