import React, { useState, useEffect } from 'react';
import AddMenuItem from './subcomponents/addMenuItem';
import EditMenuItem from './subcomponents/editMenuItem';
import { FIRESTORE_DB } from '../../../firebaseConfig';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

export default function SetUpMenu() {

    const [dbIDs, setDbIDs] = useState([]);
    const newMenuCol = collection(FIRESTORE_DB, "newMenu"); // To access firestore
    const [menuItems, setMenuItems] = useState([<AddMenuItem key={0} setItems={() => {}} setDbID={setDbIDs}/>]);
    const [currentMenuItems, setCurrentMenuItems] = useState([]);
    useEffect(() => {
        const getFromDB = async () => {
            getDocs(newMenuCol)
            .then((snapshot, index) => {
                console.log(snapshot)
              // Map each document to its document ID
              const docIds = snapshot.docs.map(doc => doc.id);
              docIds.map( async (id) => {
                const docRef = doc(FIRESTORE_DB, "newMenu", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data()["newItem"]["price"]);
                    setCurrentMenuItems(oldItems => [
                        ...oldItems,
                        <EditMenuItem key={index} items={docSnap.data()['newItem']['item']} prices={docSnap.data()['newItem']['price']} id={id}/>
                    ])
                }
            })
        })
    }
        getFromDB();
    },[dbIDs])

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
            {currentMenuItems}
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
