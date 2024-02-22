

export default function OrderInfo()
{
    return (
        <div className="flex flex-col flex-1 w-2/3 items-center ml-12 mr-6 mt-4 pb-8">
            <div className="flex bg-primary flex-col rounded-xl my-2 w-full">
                <input
                type="text"
                className="text-4xl bg-transparent placeholder-text p-4"
                placeholder="Name"
                />
            </div>
            
            <div className="flex justify-between bg-primary rounded-xl my-2 w-full">
                <input
                type="number"
                className="text-4xl rounded-xl bg-transparent placeholder-text w-1/2 p-4"
                placeholder="Hour"
                min={1}
                max={12}
                />
                <input
                type="number"
                className="text-4xl rounded-xl bg-transparent placeholder-text w-1/2 p-4"
                placeholder="Minute"
                min={0}
                max={59}
                />
            </div>
            <div className="flex justify-between bg-primary w-full rounded-xl my-2">
                <button className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">Plated</button>
                <button className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">To Go</button>
            </div>
            <div className="flex justify-between bg-primary w-full rounded-xl my-2">
                <button className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">Cash</button>
                <button className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">Card</button>
                <button className="flex-1 bg-accent text-4xl rounded-xl m-4 py-1">Pre Paid</button>
            </div>

        </div>
    )
}