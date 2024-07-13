import { useEffect, useState } from "react"
import { OrderCard } from "../../components/OrderCard/OrderCard"
import { CancelModal } from "../../components/CancelModal/CancelModal"
import { getOrders } from "../../api/getOrders"
import "./History.css"

const History = () => {
    const [orders, setOrders] = useState([])
    const [modalActive, setModalActive] = useState(false)
    const [modalOrderId, setModalOrderId] = useState("")
    
    useEffect(() => {
        const responce = getOrders(localStorage.getItem("userToken"))
        responce.then(data => {
            setOrders(data.orders)
            console.log(data)
        })
    })

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