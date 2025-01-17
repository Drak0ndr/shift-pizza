import { NavLink } from "react-router-dom"
import "./Order.css"

const Order = ({status, addres}) => (
    <div className="оrder">
        <div className="status item">
            <div className={status == 3 ? "label success" : status == 4 ? "label cancel" : "label pending"}></div>
            {status == 3 ? "Заказ доставлен" : status == 4 ? "Заказ отменён" : status==1 ? "Ждём котика" : "Заказ оформлен"}
        </div>
        <div className="addres item">Россия, г. Новосибирск, ул. {addres.street}, д. {addres.house}</div>
        <div className="compaund item">Неизвестно</div>
        <NavLink to="/history">
            <div className="details item">Подробнее</div>
        </NavLink>
    </div>
)

export {Order}