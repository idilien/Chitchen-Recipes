import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CategoriesContext = createContext()

const CategoriesProvider = ({children}) => {

        const [categories, setCategories] = useState([])

        const getCategories = async () => {
                try {
                        // const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
                        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
                        const {data} = await axios(url)
                        // console.log(data.categories)
                        setCategories(data.categories)
                } catch (error) {
                        console.log(error);
                }
        }
        useEffect(() => {
                getCategories()
        
        }, [])
        

    return(
            <CategoriesContext.Provider
                    value={{
                        categories

                    }}
            >
                    {children}
            </CategoriesContext.Provider>
    )
}

export {
    CategoriesProvider
}

export default CategoriesContext