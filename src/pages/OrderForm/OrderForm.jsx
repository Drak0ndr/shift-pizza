import { useState } from "react"
import "./OrderForm.css"
import { NavLink } from "react-router-dom"

const OrderForm = ({orderData, setOrderData}) => {
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [addres, setAddres] = useState('')

    const [surnameDirty, setSurnameDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const surnameHandler = e => {
        setSurname(e.target.value)
        orderData.person.lastName = e.target.value
    }
    const nameHandler = e => {
        setName(e.target.value)
        orderData.person.firtsName = e.target.value
    }
    const phoneHandler = e => {
        setPhone(e.target.value)
        orderData.person.phone = e.target.value
    }
    const emailHandler = e => {
        setEmail(e.target.value)
    }
    const characterCounter = (str, char) => {
        let ans = 0
        for (let i = 0; i< str.length; i++) {
            if (str[i] == char) {
                ans++
            }
        }
        return ans
    }
    const addresHandler = e => {
        setAddres(e.target.value)
        let data = e.target.value
        const commaCount = characterCounter(data, ',')
        for(let i =0; i < 5-commaCount; i++) {
            data+=','
        }
        data = data.split(',')
        orderData.receiverAddress.street = data[1].replace("ул.", "")
        orderData.receiverAddress.house = data[2].replace("д.", "")
        orderData.receiverAddress.apartment = data[3].replace("кв.", "")
    }
    return (
        <div className="Order_form">
            <div className="container">
                <p className="title">Введите ваши данные</p>
                <form action="">
                    <div className="form_item">
                        <label htmlFor="surname">{surnameDirty && surname=="" ? "Это поле обязательно для заполнения" : "Фамилия*"}</label>
                        <input onBlur={() => {setSurnameDirty(true)}} onChange={e => {surnameHandler(e)}} type="text" required name="surname" placeholder="Фамилия" value={surname}/>
                    </div>
                    <div className="form_item">
                        <label htmlFor="name">{nameDirty && name=="" ? "Это поле обязательно для заполнения" : "Имя*"}</label>
                        <input onBlur={() => {setNameDirty(true)}} onChange={e => {nameHandler(e)}} type="text" required name="name" placeholder="Имя" value={name}/>
                    </div>
                    <div className="form_item">
                        <label htmlFor="phone">{phoneDirty && phone=="" ? "Это поле обязательно для заполнения" : "Телефон*"}</label>
                        <input onBlur={() => {setPhoneDirty(true)}} onChange={e => {phoneHandler(e)}} type="tel" required name="phone" placeholder="Телефон" value={phone}/>
                    </div>
                    <div className="form_item">
                        <label htmlFor="email">Email</label>
                        <input onChange={e => {emailHandler(e)}} type="email" name="email" placeholder="Email" value={email}/>
                    </div>
                    <div className="form_item">
                        <label htmlFor="addres">Адрес</label>
                        <input onChange={e => {addresHandler(e)}} type="text" name="addres" placeholder="Адрес" value={addres}/>
                    </div>
                    <div className="form_item buttons">
                        <button className="back">Назад</button>
                        <NavLink to={"/debitCard"}>
                            <button className="continue" type="button" disabled={surname=="" || name=="" || phone==""}  onClick={() => {setOrderData(orderData); console.log(orderData)}}>Продолжить</button>
                        </NavLink>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export {OrderForm}