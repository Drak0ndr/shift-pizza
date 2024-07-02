import { useState, useEffect } from "react"
import cheesePizza from "../img/Сырная.png"
import PizzaCard from "./PizzaCard"



function Main() {
    const [pizzas, setPizzas] = useState([])

    async function getPizzas() {
        const response = await fetch(
            "https://shift-backend.onrender.com/pizza/catalog"
          ).then((response) => response.json())
      
          setPizzas(response.catalog)
          console.log(response.catalog)
    }

    useEffect(() => {
        getPizzas()
    }, [])
    return(
        <main>
            <div className="container">
                {pizzas.map((pizza) => {
                   return <PizzaCard img = {"https://shift-backend.onrender.com" + pizza.img} title = {pizza.name} description = {pizza.description} minCost = {pizza.sizes[0].price}/>
                })}
            </div>
        </main>
    )
}

export default Main