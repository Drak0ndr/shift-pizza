import { cancelOrder } from "../../api/cancelOrder"
import question from "../../img/question.svg"
import "./CancelModal.css"

const CancelModal = ({active, setActive, id}) => (
    <div className={active ? "cancel_modal_bg active" : "cancel_modal_bg" } onClick={() => setActive(false)}>
        <div className="cancel_modal" onClick={(e) => e.stopPropagation()}>
            <div className="close" onClick={() => setActive(false)}></div>
            <div className="content">
                <img src={question} alt="" />
                <p className="title">Отменить заказ?</p>
                <button className="cancel" onClick={() => {cancelOrder(localStorage.getItem("userToken"), id); setActive(false)}}>Отменить</button>
                <button className="no_cancel" onClick={() => setActive(false)}>Не отменять</button>
            </div>
        </div>
    </div>
)

export {CancelModal}