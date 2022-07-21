import React ,{useContext} from "react"
import { UserContext } from "../context/UserContext";

export const Datos = () => {
    const user = useContext(UserContext);
    return(
        <>
        { JSON.stringify(user)}
        </>
    )
}