import { createContext, useState, useEffect } from "react";

const Context = createContext()

function Provider({children}){
    let [portfolio, setPortfolio] = useState({})

    useEffect(() => {
        fetch("https://getteruz-production.up.railway.app/sites")
            .then(res => res.json())
            .then(data => {
                if(data.status == 200){
                    setPortfolio(data)
                }
            })
    }, []);
    return(
        <Context.Provider value={{portfolio, setPortfolio}}>
            {children}
        </Context.Provider>
    )
}


export { Context, Provider }