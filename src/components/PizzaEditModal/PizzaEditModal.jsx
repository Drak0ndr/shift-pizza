import { useEffect, useState } from "react"
import { SupplementCard } from "../SupplementCard/SupplementCard"
import "../PizzaModal/PizzaModal.css"

const PizzaEditModal = ({ active, setActive, basketData, setBasketData, id}) => {
    const [activeSize, setActiveSize] = useState(0)
    const [activeSupplements, setActiveSupplements] = useState(basketData[id].toppings)
    console.log(basketData[id], activeSupplements)
    const isSupplementActive = (name) => {
        activeSupplements.forEach(item => {
            if (name == item.name) {
                console.log(name)
                return true
            }
        })
        return false
    }
    useEffect(() => {
        setActiveSupplements(basketData[id].toppings)
    }, [active])
    return (
        <div className={active ? "pizza_modal_bg active" : "pizza_modal_bg"} onClick={() => {setActive(false);setActiveSupplements([]);setActiveSize(0)}}>
            <div className="pizza_modal" onClick={(e) => e.stopPropagation()}>
                <div className="close" onClick={() => setActive(false)}></div>
                <div className="content" >
                    <img src={basketData[id].img} alt="pizza" />
                    <div className="order">
                        <div className="choise">
                            <p className="title">{basketData[id].name}</p>
                            <p className="description">30 см, традиционное тесто</p>
                            <p className="compaund">{basketData[id].description}</p>
                            <div className="sizes">
                                <div className={activeSize == 0 ? "size size_active" : "size"} onClick={() => setActiveSize(0)}>Маленькая</div>
                                <div className={activeSize == 1 ? "size size_active" : "size"} onClick={() => setActiveSize(1)}>Средняя</div>
                                <div className={activeSize == 2 ? "size size_active" : "size"} onClick={() => setActiveSize(2)}>Большая</div>
                            </div>
                            <p className="add">Добавить по вкусу</p>
                            <div className="supplements">
                                {basketData[id].allToppings.map((item, index) => (
                                    <SupplementCard key={index} img={item.img} title={item.name} cost={item.cost} data={activeSupplements} setData={setActiveSupplements} cardActive={isSupplementActive(item.name)}/>
                                ))}

                            </div>
                        </div>
                        <button className="button" onClick={() => {setActive(false);setActiveSupplements([]);setActiveSize(0)}}>Сохранить</button>
                    </div>

                </div>
            </div>
        </div>
    )

}

export { PizzaEditModal }