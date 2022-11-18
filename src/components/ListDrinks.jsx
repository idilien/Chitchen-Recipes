import { Row } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"
import Drink from "./Drink"


const ListDrinks = () => {
    
    const {drinks} = useDrinks()
    // console.log(drinks)
    return (
      <Row className="mt-5 ">
            {drinks.map(drink =>(
              <Drink
                        key={drink.idMeal}
                        drink={drink}
              />
            ))}
      </Row>
    
  )
}

export default ListDrinks