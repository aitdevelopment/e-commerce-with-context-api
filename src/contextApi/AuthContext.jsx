import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext("");


const AuthContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("user")) || null)
    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("user")) || null)
    }, [localStorage.getItem("user")])
    const [open, setOpen] = useState(false)


    return <AuthContext.Provider value={{ userInfo, open, setOpen }} >{children}</AuthContext.Provider>
}

export default AuthContextProvider;





