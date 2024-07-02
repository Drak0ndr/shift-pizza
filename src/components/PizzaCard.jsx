import cheesePizza from "../img/Сырная.png"

function PizzaCard(props) {
    return (
        <div className="pizza">
            <img src={props.img} alt="" />
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
            <p className="price">от {props.minCost}  ₽</p>
            <div className="button">Выбрать</div>
        </div>
    )

}

export default PizzaCard