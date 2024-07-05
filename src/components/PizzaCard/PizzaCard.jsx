import './PizzaCard.css'

const PizzaCard = ({ id, img, title, description, minCost, setModalActive, setModalData, toppings, doughs, sizes}) => (
    <div className="pizza_card">
        <img src={img} alt="" />
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="price">от {minCost}  ₽</p>
        <button className="button" onClick={() => { setModalActive(true); setModalData({ id:id, img: img, title: title, descr: description, toppings: toppings, sizes:sizes,doughs:doughs }) }}>Выбрать</button>
    </div>

)

export { PizzaCard }