import "./Order.css"

const Order = ({status, addres}) => {
    return (
        <div className="Order">
            <div className="status item">
                <div className={status == 3 ? "label success" : status == 0 ? "label pending" : "label cancel"}></div>
                {status == 3 ? "Заказ доставлен" : status == 0 ? "Заказ оформлен" : "Заказ отменён"}
            </div>
            <div className="addres item">Россия, г. Новосибирск, ул. {addres.street}, д. {addres.house}</div>
            <div className="compaund item">Неизвестно</div>
            <div className="details item">Подробнее</div>
        </div>
    )
}

export {Order}