import { useState, useEffect } from "react"
import { PizzaCard } from "./../PizzaCard/PizzaCard"
import { backendUrl } from "../consts"
import './Main.css'

const Main = ({ setModalActive, setModalData }) => {
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

    return (
        <main>
            <div className="container">
                {pizzas.map((pizza) => (
                    <PizzaCard setModalData={setModalData} setModalActive={setModalActive} key={pizza.id} img={backendUrl + pizza.img} title={pizza.name} description={pizza.description} minCost={pizza.sizes[0].price} toppings={pizza.toppings} />
                ))}
            </div>
        </main>
    )
}

export { Main }