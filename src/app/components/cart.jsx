import CartItems from "./subcomponents/cartItem"
export default function Cart({items}) {
    return (
        <div className="w-1/3 bg-secondary flex items-center justify-between rounded-xl ml-6 mr-12 flex-col">
            <div className="w-full ">
                <h2 className="text-5xl mt-4 mb-2 text-center"> Cart </h2>
                <div className="w-11/12 flex justify-evenly items-center text-2xl">
                    <span>Items</span>
                    <span>Quantity</span>
                    <span>Price</span>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <CartItems item={"Shrimp Roll"} price={"12.00"} quantity={3}/>
                    <CartItems item={"Shrimp Roll"} price={"12.00"} quantity={3}/>
                    <CartItems item={"Shrimp Roll"} price={"12.00"} quantity={3}/>
                    <CartItems item={"Shrimp Roll"} price={"12.00"} quantity={3}/>    
                </div>
            </div>
            <div className="w-11/12 flex flex-col justify-center items-evenly text-2xl mb-4">
                <div className="h-0.5 bg-text/50 w-full my-1.5"></div>
                <div className="flex justify-between items-cente mx-1.5">
                    <span>Total</span>
                    <span>$12.00</span>
                </div>
            </div>
        </div>
    )
}