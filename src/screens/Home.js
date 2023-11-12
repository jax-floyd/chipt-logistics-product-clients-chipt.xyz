import React, { useState, useEffect } from 'react';

import Typewriter from 'typewriter-effect';
import { firestore } from '../firebase';
import { doc, setDoc } from "firebase/firestore";

import { useUserContext } from '../contexts/UserContext';

import Button from '../components/ui/Button';
import writeToFirestore from '../functions/writeToFirestore';

const Home = () => {
    
    const { user } = useUserContext();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [ready, setReady] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleSignUp = async () => {
        setLoading(true);

        if (name === '' || email === '' || company === '') {
            setMessage('Please fill out the above fields before submitting.');
            setLoading(false);
            return;
        }
        
        try {
            setTimeout(() => {
                writeToFirestore(user, name, email, company);
                setReady(true);
            }, 1000);

        } catch (error) {
            setTimeout(() => {
                console.log(error);
                setMessage('Something went wrong. Please try again.');
            }, 1000);
        }

        setLoading(false);

        setTimeout(() => {
            setSuccess(true);
        }, 1000);
    };

    return (
        <div class="flex flex-1 w-full h-full items-center justify-center bg-white px-2">
            <div class="absolute inset-0 z-0 left-4 flex flex-1 border-l border-dashed border-primary-400 px-4"></div>
            <div class="absolute inset-0 z-0  top-4 flex flex-1 border-t border-dashed border-primary-400 px-4"></div>
            <div class="absolute inset-0 z-0 right-4 flex flex-1 border-r border-dashed border-primary-400 px-4"></div>
            <div class="flex flex-1 flex-row w-full h-full items-center justify-start"> 
                <div class="flex flex-1 relative z-10  h-full items-center justify-center overflow-scroll">
                    <div class="flex xl:flex-row flex-col relative z-10 flex-1 w-full h-full items-center justify-start p-8 rounded-sm xl:space-x-16 xl:space-y-0 space-y-16">                            
                        <a class="flex flex-1 h-full items-center justify-start md:text-[11.0rem] sm:text-8xl text-8xl md:leading-[9.5rem] leading-[4.5rem] font-black -tracking-wider">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: '75',
                                    cursor: '|',
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                    .typeString("Trucks running empty?")
                                    .start();
                                }}
                            />
                        </a>
                        <div class="flex animate-fade-left flex-1 flex-col w-full h-full items-start justify-start space-y-4">
                            <p class="flex w-full text-[11px] text-application-red-400 font-semibold uppercase tracking-widest">What we do</p>
                            <p class="text-6xl font-black -tracking-wider text-left leading-[3.0rem]">Chipt is building the marketplace for backhaul freight.</p>
                        <div>
                            <img src={require("../assets/truck.png")} class="w-full h-full rounded-md object-contain pointer-events-none" />
                        </div>
                        
                        {!success ? (
                            <>
                                <div class={`flex flex-col w-full items-center justify-start space-y-3 ${ready && "animate-flip-up"}`}>
                                    <div class="flex flex-row w-full space-x-2">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Name"
                                            class="pt-3 w-full border-[0.5px] border-primary-400 rounded-md px-4 py-2 focus:outline-none"
                                        />
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            class="pt-3 w-full border-[0.5px] border-primary-400 rounded-md px-4 py-2 focus:outline-none"  
                                        />
                                        <input
                                            type="text"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            placeholder="Company"
                                            class="pt-3 w-full border-[0.5px] border-primary-400 rounded-md px-4 py-2 focus:outline-none"
                                        />
                                    </div>

                                    <div class={`flex flex-row w-full space-x-2`}>
                                        <Button 
                                            title="Sign up to join the early access waitlist"
                                            theme="dark"
                                            loading={loading}
                                            disabled={loading}
                                            onClick={handleSignUp}
                                        />
                                    </div>
                                </div>
                                {message !== '' && (
                                    <div class="flex flex-row w-full">
                                        <p class="text-sm text-application-red-400">{message}</p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div class={`flex flex-col w-full items-center justify-start space-y-3 ${success && "animate-fade-left"}`}>
                                <p class="flex w-full font- text-left">Thank you for signing up! Considering the urgency of the problem, we plan to be in touch as soon as possible.</p>
                            </div>
                        )}
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;