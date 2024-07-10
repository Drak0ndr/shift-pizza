import success from "../../img/success.svg"
import { NavLink } from "react-router-dom"
import { calcOrderCost } from "../../utils/calcOrderCost"
import { getPizzaInfo } from "../../utils/getPizzaInfo"
import './PaymentModal.css'

const PaymentModal = ({active, setActive, orderData}) => (
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
                        <p className="description">{calcOrderCost(orderData.pizzas)} р</p>
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

export { PaymentModal }