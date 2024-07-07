import { useState, useEffect } from "react"
import { PizzaCard } from "../../components/PizzaCard/PizzaCard"
import { backendUrl } from "../../components/consts"
import './Main.css'

const Main = ({ setModalActive, setModalData }) => {
    const [pizzas, setPizzas] = useState([])

     const getPizzas = async () => {
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
                    <PizzaCard id={pizza.id} setModalData={setModalData} setModalActive={setModalActive} key={pizza.id} img={backendUrl + pizza.img} title={pizza.name} description={pizza.description} minCost={pizza.sizes[0].price} toppings={pizza.toppings} doughs={pizza.doughs} sizes={pizza.sizes} />
                ))}
            </div>
        </main>
    )
}

export { Main }