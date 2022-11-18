import { useState } from "react"
import { Button, Form, Row,  Col, Alert} from "react-bootstrap"
import useCategories from "../hooks/useCategories"
import useDrinks from "../hooks/useDrinks"





const FormComponent = () => {
    const [search, setSearch] = useState({
        nameCocktail: '',
        category: ''
    })
    const {categories} = useCategories()
    const {consultDrink} = useDrinks()
    const [alert, setAlert] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('All fields are required')
            return
        }
        setAlert('')
        consultDrink(search)
    }
    
  return (
         <Form
                onSubmit={handleSubmit}
         >
            <Row>
                <Col md={6}>
                    <Form.Group className="m-3">
                        <Form.Label htmlFor="nameCocktail">Ingredient</Form.Label>
                        <Form.Control className=""                 
                                        type="text"
                                        placeholder="Ej: tomatoes, vegetables..." 
                                        name="nameCocktail"
                                        id="nameCocktail"
                                        value={search.nameCocktail}
                                        onChange={e => setSearch({
                                            ...search,
                                            [e.target.name] : e.target.value
                                        })}
                                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="m-3">
                        <Form.Label htmlFor="category">Category</Form.Label>
                            <Form.Select
                                          id="category"
                                          name="category" 
                                          value={search.category}
                                          onChange={e => setSearch({
                                              ...search,
                                              [e.target.name] : e.target.value
                                            })} 
                                            >
                                        <option> -- Select -- </option>
                                        {categories.map(categoria => (
                                            <option
                                            key={categoria.strCategory}
                                            value={categoria.strCategory}
                                            >
                                                    {categoria.strCategory}
                                            </option>
                                        ))}                      
                            </Form.Select>                    
                    </Form.Group>
                </Col>
            </Row>
                    {alert && <Alert className="text-center py-1" variant="danger">{alert}</Alert>}
            <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                            className="text-uppercase w-100"
                            variant="success"
                            type="submit"
                            
                            >
                        search
                    </Button>
                </Col>
            </Row>
         </Form>
  )
}

export default FormComponent