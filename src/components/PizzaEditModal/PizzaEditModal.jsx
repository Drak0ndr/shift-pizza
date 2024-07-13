import { useEffect, useState } from "react"
import { SupplementCard } from "../SupplementCard/SupplementCard"
import "../PizzaModal/PizzaModal.css"

const PizzaEditModal = ({ active, setActive, basketData, setBasketData, id, updateBasket}) => {
    const [data, setData] = useState({allToppings:[], toppings:[]})
    const [activeSize, setActiveSize] = useState(0)
    const [activeSupplements, setActiveSupplements] = useState(data.toppings)
    console.log(basketData, activeSize, id < basketData.length && basketData[id].size.name == 'LARGE')
    const isSupplementActive = (name) => {
        for (let item of activeSupplements) {
            if (name == item.name) {
                return true
            }
        }
        return false
    }

    const toggleSupplementActive = (name, cost, img) => {
        for (let i =0; i < activeSupplements.length; i++) {
            if (activeSupplements[i].name == name) {
                activeSupplements.splice(i, 1)
                return
            }
        }
        activeSupplements.push({name:name, cost:cost, img:img})
        setActiveSupplements(activeSupplements)
    }

    useEffect(() => {
        if (basketData.length > id) {
            setData(basketData[id])
            setActiveSupplements(basketData[id].toppings)
            setActiveSize(basketData[id].size.name == 'LARGE' ? 2 : basketData[id].size.name == 'MEDIUM' ? 1 : 0)
        } else {
            setActiveSupplements(data.toppings)
        }
    },[active])

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
                                    <SupplementCard key={index} img={item.img} title={item.name} cost={item.cost} cardActive={isSupplementActive(item.name)} reset={active} toggleSupplementActive={toggleSupplementActive}/>
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