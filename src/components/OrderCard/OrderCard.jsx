import "./OrderCard.css"

const OrderCard = ({status, addres, cancellable, id ,setOrderId, setModalActive}) => (
    <div className="order_card">
        <div className="item">
            <p className="name">Статус</p>
            <div>
                <div className={status == 3 ? "label success" : status == 4 ? "label cancel" : "label pending"}></div>
                {status == 3 ? "Заказ доставлен" : status == 4 ? "Заказ отменён" : "Заказ оформлен"}
            </div>
        </div>
        <div className="item">
            <p className="name">Адрес доставки</p>
            Россия, г. Новосибирск, ул. {addres.street}, д. {addres.house}
        </div>
        <div className="item">
            <p className="name">Состав заказа</p>
            Да Бог его знает
        </div>
        <div className="item">
            <p className="name">Сумма заказа</p>
            Неизвестно
        </div>
        {cancellable && status !=4 ? <button onClick={() => {setOrderId(id); setModalActive(true)}}>Отменить заказ</button> : ""}
        
    </div>
)

export {OrderCard}