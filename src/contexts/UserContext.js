import React, { createContext, useContext, useState, useEffect } from 'react';

import authenticateAnonymousUser from '../functions/authenticateAnonymousUser.js'; 

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const setUserFromLocalStorage = async () => {
            let uid;
            uid = localStorage.getItem("uid"); // First try to get user from local storage

            if (uid) {
                setUser(uid);
            } else {
                uid = await authenticateAnonymousUser(); // If no user in local storage, authenticate an anonymous user
                setUser(uid);
            }
        };

        if (!user) {
            setUserFromLocalStorage();
        }
    }, []);

    console.log('UserContextProvider user: ', user);
    
    const value = {
        user,
        setUser,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};