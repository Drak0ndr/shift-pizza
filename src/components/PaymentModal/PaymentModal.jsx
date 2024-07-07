import success from "../../img/success.svg"
import { useState } from "react"

import './PaymentModal.css'
import { NavLink } from "react-router-dom"

const PaymentModal = ({active, setActive, orderData}) => {

    const getPizzaInfo = pizza => {
        let ans = pizza.name + ", " + pizza.size.name + ", " + pizza.doughs.name
        if (pizza.toppings.length > 0) {
            ans += " + "
            pizza.toppings.forEach(item => {
                ans += item.name + " "
            })
        }
        return ans
    }

    const calcCost = pizzas => {
        let ans = 0
        pizzas.forEach(pizza => {
            ans+=pizza.size.price + pizza.doughs.price
            if (pizza.toppings.length > 0) {
                pizza.toppings.forEach(topping => {
                    ans+= topping.cost
                })
            }
        })

        return ans
    }
    return (
        <div className={active ? "payment_modal_bg active" : "payment_modal_bg"} onClick={() => {setActive(false)}}>
            <div className="payment_modal" onClick={(e) => e.stopPropagation()}>
                <div className="close" onClick={() => setActive(false)}></div>
                <div className="content" >
                    <img src={success} alt="" />
                    <div className="order_info">
                        <p className="status">Оплата прошла успешно!</p>
                        <div className="item">
                            <p className="title">Заказ</p>
                            {orderData.pizzas.map(pizza => (
                                <p className="description">{getPizzaInfo(pizza)}</p>
                            ))}
                        </div>
                        <div className="item">
                            <p className="title">Адрес доставки</p>
                            <p className="description">{"ул. " + orderData.receiverAddress.street + " д." + orderData.receiverAddress.house + " кв." + orderData.receiverAddress.apartment}</p>
                        </div>
                        <div className="item">
                            <p className="title">Сумма заказа</p>
                            <p className="description">{calcCost(orderData.pizzas)} р</p>
                        </div>
                        <p className="message">Вся информация была продублирована в SMS</p>
                        <NavLink to={"/"}>
                            <p className="back" onClick={() => {setActive(false)}}>Перейти в главное меню</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )

}

export { PaymentModal }