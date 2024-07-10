import { useState } from "react"
import "./Authorization.css"
import { sendOtp } from "../../api/sendOtp"
import { authorization } from "../../api/authorization"

const Authorization = ({login}) => {
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [haveOtp, setHaveOtp] = useState(false)

    const phoneHandler = e => {
        setPhone(e.target.value)
    }

    const optHandler = e => {
        setOtp(e.target.value)
    }

    const auth = async () => {
        const responce = await authorization(phone, otp)

        if (responce.success) {
            login(responce.token)
        }
    }
    
    return (
        <div className="authorization">
            <div className="container">
                <p className="title">Авторизация</p>
                <p className="description">Введите номер телефона для входа в личный кабинет</p>
                <input onChange={(e) => {phoneHandler(e)}} type="tel" name="phone" id="" placeholder="Телефон" value={phone}/>
                <input className={haveOtp ? "" : "hidden"} onChange={(e) => {optHandler(e)}} type="text" name="phone" id="" placeholder="Проверочный код" value={otp}/>
                <button onClick={() => {haveOtp ? auth() : sendOtp(phone)}}>{haveOtp ? "Войти" : "Продолжить"}</button>
            </div>
        </div>
    )
}

export {Authorization}