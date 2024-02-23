import { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../../../../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import PreviousMap from "postcss/lib/previous-map";


export default function OrderInfo({orderIDs, total})
{
    const [name, setName] = useState('');
    const [hour, setHour] = useState(1);
    const [minute, setMinute] = useState(0);
    const [howEat, setHowEat] = useState('');
    const [howPay, setHowPay] = useState('');
    const [hasOrdered, setHasOrdered] = useState(false);
    const [id, setId] = useState(100000 + Math.floor(Math.random()*10));
    const[order, setOrder] = useState([])

    const displayPayment = (paymentMethod) => {
        return `flex-1 text-4xl rounded-xl m-4 py-1 ${howPay === paymentMethod ? 'bg-selected' : 'bg-accent'}`;
    };
    const displayEating = (eatingMethod) => {
        return `flex-1 text-4xl rounded-xl m-4 py-1 ${howEat === eatingMethod ? 'bg-selected' : 'bg-accent'}`;
    };

    useEffect(() => {
        setOrder([]);
        const fetchFromDB = async () => {
            //const docRef = doc(FIRESTORE_DB, "Orders", id.toString());
            orderIDs.map( async (id) => {
                const docSnap = await getDoc(doc(FIRESTORE_DB, "Menu", id['id'].toString()))
                setOrder(prev => [...prev, docSnap.data()['item']])
            })
        }
        fetchFromDB();
    },[orderIDs])

    const handleButtonClick = async () => {
        const updatedStates = {
          name,
          hour,
          minute,
          howEat,
          howPay,
        };
        await setDoc(doc(FIRESTORE_DB, "Orders", id.toString()), {
            name: updatedStates.name,
            hour: updatedStates.hour,
            minute: updatedStates.minute,
            howEat: updatedStates.howEat,
            howPay: updatedStates.howPay,
            order: order,
            total: total
          });
          setHasOrdered(true);
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
                <button onClick={() => setHowEat('plated')} className={displayEating('plated')}>Plated</button>
                <button onClick={() => setHowEat('to go')} className={displayEating('to go')}>To Go</button>
            </div>
            <div className="flex justify-between bg-primary w-full rounded-xl my-2">
                <button onClick={() => setHowPay('cash')} className={displayPayment('cash')}>Cash</button>
                <button onClick={() => setHowPay('card')} className={displayPayment('card')}>Card</button>
                <button onClick={() => setHowPay('pre paid')} className={displayPayment('pre paid')}>Pre Paid</button>
            </div>
            {
                !hasOrdered && (
                    <button onClick={handleButtonClick} className="w-full bg-accent mt-4 p-3 rounded-xl text-4xl">Place Order</button>
                )
            }


        </div>
    )
}