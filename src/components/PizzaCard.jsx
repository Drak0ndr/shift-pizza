import cheesePizza from "../img/Сырная.png"
import PizzaModal from "./PizzaModal"

function PizzaCard({img, title, description, minCost, setModalActive, setModalData, toppings}) {
    return (
        <div className="pizza_card">
            <img src={img} alt="" />
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <p className="price">от {minCost}  ₽</p>
            <div className="button" onClick={() => {setModalActive(true); setModalData({img:img, title:title, descr:description, toppings:toppings})}}>Выбрать</div>
        </div>
    )

}

export default PizzaCard