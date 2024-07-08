import { useEffect, useState } from 'react'
import { backendUrl } from '../consts'
import './SupplementCard.css'

const SupplementCard = ({ title, cost, img,data,setData, cardActive, reset}) => {
    const [active, setActive] = useState(cardActive)

    const toggleActive = () => {
        if(active) {
            setActive(false)
            data.forEach((item, index) => {
                if (item.name == title && item.cost == cost && item.img == img) {
                    data.splice(index,1)
                }
            })
            setData(data)
        } else {
            setActive(true)
            let temp = data
            temp.push({name:title, cost:cost, img:img})
            setData(temp)
        }
    }

    useEffect(() => {
        setActive(cardActive)
        console.log(title, "render")
    }, [reset, cardActive])

    return(
        <div className={active ? "supplement_card supplement_active" : "supplement_card"} onClick={toggleActive}>
            <img src={backendUrl + img} alt="" />
            <p className="title">{title}</p>
            <p className="price">{cost} ₽</p>
        </div>
    )
}

export { SupplementCard }