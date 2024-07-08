import { useEffect, useState } from "react"
import { SupplementCard } from "../SupplementCard/SupplementCard"
import "../PizzaModal/PizzaModal.css"

const PizzaEditModal = ({ active, setActive, basketData, setBasketData, id, updateBasket}) => {
    let data = {allToppings:[]}
    if (basketData.length > id) {
        data = basketData[id]
    }
    const [activeSize, setActiveSize] = useState(0)
    const [activeSupplements, setActiveSupplements] = useState(data.toppings)
    console.log(data, activeSupplements)
    const isSupplementActive = (name) => {
        for (let item of activeSupplements) {
            if (name == item.name) {
                console.log(true, name)
                return true
            }
        }
        console.log(false, name)
        return false
    }
    useEffect(() => {
        setActiveSupplements(data.toppings)
    }, [active])
    return (
        <div className={active ? "pizza_modal_bg active" : "pizza_modal_bg"} onClick={() => {setActive(false);setActiveSupplements([]);setActiveSize(0); updateBasket()}}>
            <div className="pizza_modal" onClick={(e) => e.stopPropagation()}>
                <div className="close" onClick={() => {setActive(false); updateBasket()}}></div>
                <div className="content" >
                    <img src={data.img} alt="pizza" />
                    <div className="order">
                        <div className="choise">
                            <p className="title">{data.name}</p>
                            <p className="description">30 см, традиционное тесто</p>
                            <p className="compaund">{data.description}</p>
                            <div className="sizes">
                                <div className={activeSize == 0 ? "size size_active" : "size"} onClick={() => setActiveSize(0)}>Маленькая</div>
                                <div className={activeSize == 1 ? "size size_active" : "size"} onClick={() => setActiveSize(1)}>Средняя</div>
                                <div className={activeSize == 2 ? "size size_active" : "size"} onClick={() => setActiveSize(2)}>Большая</div>
                            </div>
                            <p className="add">Добавить по вкусу</p>
                            <div className="supplements">
                                {data.allToppings.map((item, index) => (
                                    <SupplementCard key={index} img={item.img} title={item.name} cost={item.cost} data={activeSupplements} setData={setActiveSupplements} cardActive={isSupplementActive(item.name)} reset={active}/>
                                ))}

                            </div>
                        </div>
                        <button className="button" onClick={() => {basketData[id].size = basketData[id].allSizes[activeSize];setActive(false);setActiveSupplements([]);setActiveSize(0); setBasketData(basketData); updateBasket()}}>Сохранить</button>
                    </div>

                </div>
            </div>
        </div>
    )

}

export { PizzaEditModal }