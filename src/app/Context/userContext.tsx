'use client'
import React,{createContext} from "react";
import { useState } from "react"
import { User, UserContextState } from "../Types/user";

interface ProviderProps {
    children : React.ReactNode;
}

//creamos el contexto para el estado del usuario
export const Context = createContext<UserContextState | null>(null);

export const UserProvider: React.FC<ProviderProps> = ( {children} ) => {
    // usuario actual
    const [currentUser, setCurrentUser] = useState<User>({
        clientId: 0,
        usuario: ' ',
        email: ' ',
        password: ''
    });


    // Iniciar sesión del usuario
    const loginUser = (user: User) => {
        setCurrentUser(user);
    }

    return(
        <Context.Provider 
        value={{
            currentUser,
            loginUser
            }}
        >
            {children}
        </Context.Provider>
    )
}