import axios from "axios";
import {createContext, useEffect, useState } from "react";

const Context = createContext()
function Provider({children}) {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('https://63df32c43d94d02c0bb5c567.mockapi.io/posts')
            .then(function (response) {
                // handle success
                setProduct(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

    return (
        <Context.Provider value={{product}}>{children}</Context.Provider>
    )
}

export {Provider, Context}