import { useState } from "react"
import deleteIco from "./../../img/delete.svg"
import "./PizzaOrder.css"

const PizzaOrder = ({img, title, size, toppings, basketData, setBasketData, id, updateBasket, setModalActive, setModalId}) => {
    const [count, setCount] = useState(basketData[id].count)

    const calcCost = () => {
        let ans = size.price
        toppings.forEach(item => {
            ans+= item.cost
        })
        return ans
    }

    const changeCount = (count) => {
        if (count < 1) {
            count = 1
        }
        let temp = basketData
        temp[id].count = count
        setBasketData(temp)
        updateBasket()
    }

    return (
        <div className="pizza_order">
            <img src={img} alt="" />
            <p className="title">{title}</p>
            <p className="description"> Средняя 30 см, традиционное тесто + моцарелла, халапеньо</p>
            <div className="number">
                <button onClick={() => {count == 1 ? setCount(1) : setCount(count-1);changeCount(count-1)}}>-</button>
                <input type="number" min={1} value={count} readOnly className="count" name="pizzaCount"/>
                <button onClick={() => {setCount(count+1);changeCount(count+1)}}>+</button>
            </div>
            <p className="edit" onClick={() => {setModalActive(true);setModalId(id)}}>изменить</p>
            <p className="cost">{calcCost()*count} р</p>
            <img className="delete" src={deleteIco} alt="" onClick={() => {let temp = basketData; temp.splice(id,1); setBasketData(temp); updateBasket(); console.log(basketData)}}/>
        </div>
    )
}

export { PizzaOrder }