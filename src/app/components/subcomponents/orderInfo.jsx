import { useEffect, useState } from "react";


export default function OrderInfo({onButtonClick})
{
    const [name, setName] = useState('');
    const [hour, setHour] = useState(1);
    const [minute, setMinute] = useState(0);
    const [howEat, setHowEat] = useState('plated');
    const [howPay, setHowPay] = useState('card');

    const handleButtonClick = () => {
        const updatedStates = {
          name,
          hour,
          minute,
          howEat,
          howPay,
        };

        localStorage.setItem('orderInfo', JSON.stringify(updatedStates));

        onButtonClick(updatedStates); // Pass updated states to parent component
      };

    return (
        <div className="flex flex-col flex-1 w-2/3 items-center ml-12 mr-6 mt-4 pb-8">
            <div className="flex bg-primary flex-col rounded-xl my-2 w-full">
                <input
                type="text"
                className="text-4xl bg-transparent placeholder-text p-4"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            
            <div className="flex justify-between bg-primary rounded-xl my-2 w-full">
                <input
                type="number"
                className="text-4xl rounded-xl bg-transparent placeholder-text w-1/2 p-4"
                placeholder="Hour"
                min={1}
                max={12}
                onChange={(e) => setHour(e.target.value)}
                />
                <p className="text-4xl p-4">
                    :
                </p>
                <input
                type="number"
                className="text-4xl rounded-xl bg-transparent placeholder-text w-1/2 p-4"
                placeholder="Minute"
                min={0}
                max={59}
                onChange={(e) => setMinute(e.target.value)}
                />
            </div>
            <div className="flex justify-between bg-primary w-full rounded-xl my-2">
                <button onClick={() => setHowEat('plated')} className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">Plated</button>
                <button onClick={() => setHowEat('to go')} className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">To Go</button>
            </div>
            <div className="flex justify-between bg-primary w-full rounded-xl my-2">
                <button onClick={() => setHowPay('cash')} className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">Cash</button>
                <button onClick={() => setHowPay('card')} className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">Card</button>
                <button onClick={() => setHowPay('pre paid')} className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">Pre Paid</button>
            </div>
            <button onClick={handleButtonClick} className="w-full bg-accent mt-4 p-3 rounded-xl text-4xl">Place Order</button>

        </div>
    )
}