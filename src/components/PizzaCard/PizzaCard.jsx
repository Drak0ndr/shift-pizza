import './PizzaCard.css'

const PizzaCard = ({img, title, description, minCost, setModalActive, setModalData, toppings}) => (
    <div className="pizza_card">
        <img src={img} alt="" />
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="price">от {minCost}  ₽</p>
        <button className="button" onClick={() => {setModalActive(true); setModalData({img:img, title:title, descr:description, toppings:toppings})}}>Выбрать</button>
    </div>

)

export default PizzaCard