import question from "../../img/question.svg"
import "./CancelModal.css"

const CancelModal = ({active, setActive, id}) => {
    const cancelOrder = async (token, id) => {
        const responce = await fetch(
            "https://shift-backend.onrender.com/pizza/orders/cancel", {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({orderId: id,})
            }
        ).then((responce) => responce.json())
        console.log(JSON.stringify({orderId: id,}))
        console.log(responce)
    }
    return (
        <div className={active ? "cancel_modal_bg active" : "cancel_modal_bg" } onClick={() => setActive(false)}>
            <div className="cancel_modal" onClick={(e) => e.stopPropagation()}>
                <div className="close" onClick={() => setActive(false)}></div>
                <div className="content">
                    <img src={question} alt="" />
                    <p className="title">Отменить заказ?</p>
                    <button className="cancel" onClick={() => {cancelOrder(localStorage.getItem("userToken"), id)}}>Отменить</button>
                    <button className="no_cancel" onClick={() => setActive(false)}>Не отменять</button>
                </div>
            </div>
        </div>
    )
}

export {CancelModal}