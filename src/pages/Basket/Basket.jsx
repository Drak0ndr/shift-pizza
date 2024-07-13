import { useEffect, useState } from 'react'
import { PizzaOrder } from '../../components/PizzaOrder/PizzaOrder'
import './Basket.css'
import { PizzaEditModal } from '../../components/PizzaEditModal/PizzaEditModal.jsx'
import { NavLink } from 'react-router-dom'

const Basket = ({ basketData, setBasketData, orderData, setOrderData}) => {
    const [cost, setCost] = useState(0)
    const [modalActive, setModalActive] = useState(false)
    const [modalId, setModalId] = useState(0)

    const calcCost = () => {
        let ans = 0
        basketData.forEach(item => {
            ans += item.size.price * item.count
            item.toppings.forEach(topping => {
                ans += topping.cost * item.count
            })
        })
        setCost(ans)
        // console.log(ans)
        orderData.pizzas = basketData
        setOrderData(orderData)
    }

    useEffect(() => {
        calcCost()
    }, [])

    return (
        <>
            <div className="basket">
                <div className="container">
                    <div className=" pizzas">
                        {basketData.map((item, index) => (
                            <PizzaOrder setModalActive={setModalActive} id={index} key={index} img={item.img} title={item.name} size={item.size} toppings={item.toppings} basketData={basketData} setBasketData={setBasketData} updateBasket={calcCost} setModalId={setModalId}/>
                        ))}
                    </div>
                    <div className="total">
                        <p className="cost">Стоимость заказа: {cost} р</p>
                        <NavLink to={"/orderForm"}>
                            <button>Оформить заказ</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <PizzaEditModal active={modalActive} setActive={setModalActive} basketData={basketData} setBasketData={setBasketData} id={modalId} updateBasket={calcCost}/>
        </>
    )
}

export { Basket }