"use client"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Router, useRouter } from "next/navigation";
import { FIREBASE_APP } from "../../../firebaseConfig";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [loginError, setLoginError] = useState(' ');
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const auth = getAuth();

    localStorage.setItem('isLoggedIn', 'false');

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', isLoggedIn);
            router.push('/admin');
        })
        .catch((error) => {
            setLoginError('Incorrect email or password');
            setIsLoggedIn(false);
            localStorage.setItem('isLoggedIn', isLoggedIn);
        });
    }

    if (auth.currentUser) {
        router.push('/admin');
    }

    return (
        
        <div className="flex flex-col flex-1 w-full items-center justify-center">
            <Image
              src="/TheHeatLogo.png"
              alt="The Heat Logo"
              width={250}
              height={240}
              priority
            />
            <div className="flex flex-col w-1/2 items-center justify-center m-10">
                <div className=" flex text-red-500 text-xl mb-4">{loginError}</div>
                <div className="flex bg-primary flex-col rounded-xl my-2 w-full">
                    <input
                        type="text"
                        className="text-4xl bg-transparent placeholder-text p-4"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="flex bg-primary flex-col rounded-xl my-2 w-full">
                        <input
                            type="password"
                            className="text-4xl bg-transparent placeholder-text p-4"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div className="flex justify-center flex-1 bg-primary w-full rounded-xl my-2">
                    <button onClick={handleSignIn} className="text-5xl w-full p-4">Login</button>
                </div>
            </div>
        </div>
    )
}