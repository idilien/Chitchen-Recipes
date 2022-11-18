import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DrinksContext = createContext()

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkById, setDrinkById] = useState(null)
    const [recipe, setRecipe] = useState({})
    const [spinner, setSpinner] = useState(false)

    useEffect(() => {
        setRecipe(true)
       const getRecipe = async () => {
        if(!drinkById ) return
        try {
            // const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkById}`
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${drinkById}`
            const {data} = await axios(url)
            console.log(data);
            setRecipe(data.meals[0]);
        } catch (error) {
            console.log(error)
        }finally{
            setSpinner(false)
        }
       }
       getRecipe()
    }, [drinkById])
    

    const consultDrink = async datas => {
        try {
            // const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datas.nameCocktail}&c=${datas.category}`
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${datas.nameCocktail}&c=${datas.category}`
            const {data} = await axios(url)
            // console.log(data.meals);
            setDrinks(data.meals)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleModal = () => {
        setModal(!modal)
    }

    const handleDrinkById = id => {
        setDrinkById(id)
    }

    return(
            <DrinksContext.Provider
                    value={{
                        consultDrink,
                        drinks, 
                        handleModal,
                        modal,
                        handleDrinkById,
                        recipe,
                        setRecipe,
                        spinner
                    }}
            >
                    {children}
            </DrinksContext.Provider>
    )
}

export {
    DrinksProvider
}

export default DrinksContext