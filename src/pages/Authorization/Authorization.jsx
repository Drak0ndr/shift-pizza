import { useState } from "react"
import { sendOtp } from "../../api/sendOtp"
import { authorization } from "../../api/authorization"
import { useNavigate } from "react-router-dom"
import ReactInputMask from "react-input-mask"
import "./Authorization.css"

const Authorization = ({login}) => {
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [haveOtp, setHaveOtp] = useState(false)
    const navigate = useNavigate()
    
    const phoneHandler = e => {
        setPhone(e.target.value)
    }

    const optHandler = e => {
        setOtp(e.target.value)
    }

    const auth = async () => {
        
        const responce = await authorization(phone.replaceAll(" ", ""), otp)

        if (responce.success) {
            login(responce.token)
            navigate("/")
        }
    }
    
    return (
        <div className="authorization">
            <div className="container">
                <p className="title">Авторизация</p>
                <p className="description">Введите номер телефона для входа в личный кабинет</p>
                <ReactInputMask mask="9 999 999 99 99" maskChar="" onChange={(e) => {phoneHandler(e)}} type="tel" name="phone" id="" placeholder="Телефон" value={phone}/>
                <input className={haveOtp ? "" : "hidden"} onChange={(e) => {optHandler(e)}} type="text" name="phone" id="" placeholder="Проверочный код" value={otp}/>
                <button onClick={() => {haveOtp ? auth() : sendOtp(phone.replaceAll(" ", "")).then(responce => {console.log(responce); responce.success ? setHaveOtp(true): setHaveOtp(false)})}}>{haveOtp ? "Войти" : "Продолжить"}</button>
            </div>
        </div>
    )
}

export {Authorization}