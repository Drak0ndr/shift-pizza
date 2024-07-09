import { useEffect, useState } from "react"
import { OrderCard } from "../../components/OrderCard/OrderCard"
import "./History.css"
import { CancelModal } from "../../components/CancelModal/CancelModal"

const History = () => {
    const [orders, setOrders] = useState([])
    const [modalActive, setModalActive] = useState(false)
    const [modalOrderId, setModalOrderId] = useState("")
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
        <div className="history">
            <div className="container">
                <p className="title">История</p>
                    {orders.map(item => (
                        <OrderCard status={item.status} addres={item.receiverAddress} cancellable={item.cancellable} id={item._id} setOrderId={setModalOrderId} setModalActive={setModalActive}/>
                    ))}
                    
            </div>
            <CancelModal active={modalActive} setActive={setModalActive} id={modalOrderId}/>
        </div>
    )
}

export {History}