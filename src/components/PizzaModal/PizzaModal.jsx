import { useState } from "react"
import { SupplementCard } from "../SupplementCard/SupplementCard"
import './PizzaModal.css'

const PizzaModal = ({ active, setActive, data, basketData, setBasketData}) => {
    const [activeSize, setActiveSize] = useState(0)
    const [activeSupplements, setActiveSupplements] = useState([])
    
    return (
        <div className={active ? "pizza_modal_bg active" : "pizza_modal_bg"} onClick={() => {setActive(false);setActiveSupplements([]);setActiveSize(0)}}>
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
                                    <SupplementCard key={index} img={item.img} title={item.name} cost={item.cost} data={activeSupplements} setData={setActiveSupplements} cardActive={false} reset={active}/>
                                ))}

                            </div>
                        </div>
                        <button className="button" onClick={() => { let temp = JSON.parse(JSON.stringify(basketData)); temp.push({id:data.id ,img:data.img, name:data.title, description:data.descr, size:data.sizes[activeSize], doughs:data.doughs[0], toppings:activeSupplements, count:1, allToppings:data.toppings, allSizes:data.sizes});setBasketData(temp); console.log(temp);setActive(false);setActiveSupplements([]);setActiveSize(0)}}>Добавить в корзину</button>
                    </div>

                </div>
            </div>
        </div>
    )

}

export { PizzaModal }