import React, { useState } from 'react';
import AddMenuItem from './subcomponents/addMenuItem';

export default function SetUpMenu() {
    const [menuItems, setMenuItems] = useState([<AddMenuItem key={0} setItems={() => {}} input={true}/>]);

    const addMenuItem = () => {
        const newItemKey = menuItems.length;
        setMenuItems(oldItems => [
            ...oldItems,
            <AddMenuItem key={newItemKey} setItems={setMenuItems} input={true}/>
        ]);
    };

    return (
        <div className="w-2/3 flex items-center ml-12 mr-6 pb-8 rounded-xl flex-col xs:max-sm:w-full xs:max-sm:ml-0 xs:max-sm:mr-0">
            <h2 className="mt-4 text-7xl mb-4">Make Menu</h2>
            {menuItems}
            <button
                className="bg-accent text-3xl p-2 rounded-full w-14 h-14 mt-3"
                onClick={addMenuItem}
            >
                +
            </button>
        </div>
    );
}
