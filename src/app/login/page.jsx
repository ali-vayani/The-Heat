"use client"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Router, useRouter } from "next/navigation";
import { FIREBASE_APP } from "../../../firebaseConfig";
import { useState } from "react";

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const auth = getAuth();

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            router.push('/admin')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return (
        <div className="flex flex-col flex-1 w-1/2 items-center justify-center ml-12 mr-6 mt-4 pb-8">
                <div className="flex bg-primary flex-col rounded-xl my-2 w-full">
                    <input
                    type="text"
                    className="text-4xl bg-transparent placeholder-text p-4"
                    placeholder="Name"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex bg-primary flex-col rounded-xl my-2 w-full">
                    <input
                    type="text"
                    className="text-4xl bg-transparent placeholder-text p-4"
                    placeholder="Name"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-center flex-1 bg-primary w-full rounded-xl my-2">
                <button onClick={handleSignIn} className="text-7xl">Login</button>
            </div>
        </div>
    )
}