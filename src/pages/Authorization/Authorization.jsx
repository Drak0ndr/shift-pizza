import { useState } from "react"
import "./Authorization.css"
import { sendOtp } from "../../api/sendOtp"
import { authorization } from "../../api/authorization"
import { useNavigate } from "react-router-dom"

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
        
        const responce = await authorization(phone, otp)

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
                <input onChange={(e) => {phoneHandler(e)}} type="tel" name="phone" id="" placeholder="Телефон" value={phone}/>
                <input className={haveOtp ? "" : "hidden"} onChange={(e) => {optHandler(e)}} type="text" name="phone" id="" placeholder="Проверочный код" value={otp}/>
                <button onClick={() => {haveOtp ? auth() : sendOtp(phone).then(responce => {console.log(responce); responce.success ? setHaveOtp(true): setHaveOtp(false)})}}>{haveOtp ? "Войти" : "Продолжить"}</button>
            </div>
        </div>
    )
}

export {Authorization}