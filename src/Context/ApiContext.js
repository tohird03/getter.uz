import { createContext, useState, useEffect } from "react";

const Context = createContext()

function Provider({ children }) {
    let [portfolioSite, setPortfolio] = useState([])
    let [article, setArticle] = useState([])

    // Portfolio
    useEffect(() => {
        fetch("https://getteruz-production.up.railway.app/sites")
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    setPortfolio(data.data)
                }
            })
    }, []);

    // Article
    useEffect(() => {
        fetch("https://getteruz-production.up.railway.app/articles")
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    setArticle(data?.data);
                }
            })
    }, []);
    return (
        <Context.Provider value={{
            portfolioSite, setPortfolio,
            article, setArticle
        }}>
            {children}
        </Context.Provider>
    )
}


export { Context, Provider }