import { useEffect, useState } from "react"
import "./Profile.css"

const Profile = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [addres, setAddres] = useState("")

    const getSession = async (token) => {
        const responce = await fetch(
            "https://shift-backend.onrender.com/users/session", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
        ).then((responce) => responce.json())

        return responce
    }

    const updateProfile = async (token) => {
        const responce = await fetch(
            "https://shift-backend.onrender.com/users/profile", {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({profile:{firstname:name, middlename:middleName, lastname:surname, email:email, city:addres}, phone: phone})
            }
        ).then((responce) => responce.json())
        console.log(JSON.stringify({profile:{firstname:name, middlename:middleName, lastname:surname, email:email, city:addres}, phone: phone}))
        console.log(responce)
    }
    useEffect(() => {
        const data = getSession(localStorage.getItem("userToken"))
        
        data.then((data) => {
            console.log(data)
            if (data.user.phone) {
                setPhone(data.user.phone)
            }
            if (data.user.firstname) {
                setName(data.user.firstname)
            }
            if (data.user.lastname) {
                setSurname(data.user.lastname)
            }
            if (data.user.middlename) {
                setMiddleName(data.user.middlename)
            }
            if(data.user.email) {
                setEmail(data.user.email)
            }
            if(data.user.city) {
                setAddres(data.user.city)
            }
        })
    }, [])
    return (
        <div className="profile">
            <div className="container">
                <p className="title">Введите ваши данные</p>
                <form action="">
                    <div className="form_item">
                        <label htmlFor="surname">Фамилия</label>
                        <input onChange={e => {setSurname(e.target.value)}} type="text" name="surname" placeholder="Фамилия" value={surname}/>
                    </div>
                    <div className="form_item">
                        <label htmlFor="name">Имя</label>
                        <input onChange={e => {setName(e.target.value)}} type="text" name="name" placeholder="Имя" value={name}/>
                    </div>
                    <div className="form_item">
                        <label htmlFor="middle_name">Отчество</label>
                        <input onChange={e => {setMiddleName(e.target.value)}} type="text" name="middle_name" placeholder="Отчество" value={middleName}/>
                    </div>
                    <div className="form_item">
                        <label htmlFor="phone">Телефон</label>
                        <input type="tel" disabled name="phone" placeholder="Телефон" value={phone}/>
                    </div>
                    <div className="form_item">
                        <label htmlFor="email">Email</label>
                        <input onChange={e => {setEmail(e.target.value)}} type="email" name="email" placeholder="Email" value={email}/>
                    </div>
                    <div className="form_item">
                        <label htmlFor="addres">Город</label>
                        <input onChange={e => {setAddres(e.target.value)}} type="text" name="addres" placeholder="Адрес" value={addres}/>
                    </div>
                    <div className="form_item buttons">
                        <button type="button" onClick={() => {updateProfile(localStorage.getItem("userToken"))}}>Обновить данные</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {Profile}