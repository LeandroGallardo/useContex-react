import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UsersProvider = ({ children }) => {
    const usuario = {
        name: 'leandro',
        lastname:'gallardo',
        age: 32
    }
    const [user, setuser] = useState(usuario);
    return <UserContext.Provider value={{user, setuser}}>{ children }</UserContext.Provider>;
}

export const stateUser = () => {
    return useContext(UserContext);
};