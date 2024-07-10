import './PizzaCard.css'

const PizzaCard = ({ id, img, title, description, minCost, setModalActive, setModalData, toppings, doughs, sizes}) => {
    const openModal = data => {
        setModalActive(true)
        setModalData(data)
    }
    
    return (
        <div className="pizza_card">
            <img src={img} alt="" />
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <p className="price">от {minCost}  ₽</p>
            <button className="button" onClick={() => { openModal({ id:id, img: img, title: title, descr: description, toppings: toppings, sizes:sizes,doughs:doughs }) }}>Выбрать</button>
        </div>
    )
}

export { PizzaCard }