import { useEffect, useState } from "react"
import { Order } from "../../components/Order/Order"
import "./Orders.css"

const Orders = () => {
    const [orders, setOrders] = useState([])
    const getOrders = async (token) => {
        const responce = await fetch(
            "https://shift-backend.onrender.com/pizza/orders", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
        ).then((responce) => responce.json())

        return responce
    }

    useEffect(() => {
        const responce = getOrders(localStorage.getItem("userToken"))
        responce.then(data => {
            setOrders(data.orders)
            console.log(data)
        })
    },[])
    return (
        <div className="orders">
            <div className="container">
                <div className="title">
                    <div className="status">Статус</div>
                    <div className="addres">Адрес доставки</div>
                    <div className="compaund">Состав заказа</div>
                </div>
                {orders.map((item) => (
                    <Order status={item.status} addres={item.receiverAddress}/>
                ))}
                
            </div>
            
        </div>
    )
}

export {Orders}