import { Modal, Image } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"


const ModalDrink = () => {
    
    const{modal, handleModal, recipe, setRecipe, spinner} = useDrinks()

    const{strMealThumb, strArea, strMeal, strInstructions, strIngredient, strMeasure} = recipe

    const seeIngredients = () => {
      let ingredients = []
      for(let i =1;i < 16; i++){
          if(recipe[`strIngredient${i}`]){
            ingredients.push(
              <li>{recipe[`strIngredient${i}`]}{' '}{recipe[`strMeasure${i}`]}</li>
            )
          }
      }
      return ingredients
    }

  return (
          !spinner && (
            <Modal show={modal} onHide={() => {
              handleModal()
              setRecipe({})
            }}>
           
                <Image src={strMealThumb}
                            alt="img modal"
                            />
                <Modal.Header>
                    <Modal.Title className="text-black">
                     <h2>{strMeal}</h2> 
                    </Modal.Title>
                </Modal.Header>
                  <Modal.Body className="text-black">
                  <h5>{strArea}</h5>
                      
                      <div className="p-3">
                        <h5>Instructions</h5>
                        {strInstructions}
                        <h5 className="mt-3">Ingredients & Quantity</h5>
                        {seeIngredients()}
                      </div>
                      <div className=" ">
                      <button
                            className="text-uppercase w-100"
                            onClick={handleModal}
                               
                            >
                        Back
                    </button>
                      </div>
                  </Modal.Body>
                     
          </Modal>
          )
  )
}

export default ModalDrink