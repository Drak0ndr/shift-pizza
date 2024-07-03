import { useState } from "react"
import SupplementCard from "../SupplementCard/SupplementCard"
import './PizzaModal.css'

const PizzaModal = ({ active, setActive, data }) => {
    const [activeSize, setActiveSize] = useState(0)

    return (
        <div className={active ? "pizza_modal_bg active" : "pizza_modal_bg"} onClick={() => setActive(false)}>
            <div className="pizza_modal" onClick={(e) => e.stopPropagation()}>
                <div className="close" onClick={() => setActive(false)}></div>
                <div className="content" >
                    <img src={data.img} alt="pizza" />
                    <div className="order">
                        <div className="choise">
                            <p className="title">{data.title}</p>
                            <p className="description">30 см, традиционное тесто</p>
                            <p className="compaund">{data.descr}</p>
                            <div className="sizes">
                                <div className={activeSize == 0 ? "size size_active" : "size"} onClick={() => setActiveSize(0)}>Маленькая</div>
                                <div className={activeSize == 1 ? "size size_active" : "size"} onClick={() => setActiveSize(1)}>Средняя</div>
                                <div className={activeSize == 2 ? "size size_active" : "size"} onClick={() => setActiveSize(2)}>Большая</div>
                            </div>
                            <p className="add">Добавить по вкусу</p>
                            <div className="supplements">
                                {data.toppings.map((item, index) => (
                                    <SupplementCard key={index} img={item.img} title={item.name} cost={item.cost} />
                                ))}

                            </div>
                        </div>
                        <button className="button">Добавить в корзину</button>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default PizzaModal