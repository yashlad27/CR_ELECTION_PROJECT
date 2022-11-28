import { createContext, useState } from "react";

const AuthConext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthConext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthConext.Provider>
    )
}

export default AuthConext;