import { useState, useEffect } from "react"
import { PizzaCard } from "../../components/PizzaCard/PizzaCard"
import { backendUrl } from "../../components/consts"
import { getPizzas } from "../../api/getPizzas"
import "./Main.css"


const Main = ({ setModalActive, setModalData }) => {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        const responce = getPizzas()
        responce.then(responce => {
            setPizzas(responce.catalog)
        })
        
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