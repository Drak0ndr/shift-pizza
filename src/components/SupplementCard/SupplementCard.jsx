import { useEffect, useState } from 'react'
import { backendUrl, translation } from '../consts'
import './SupplementCard.css'

const SupplementCard = ({ title, cost, img, cardActive, reset, toggleSupplementActive}) => {
    const [active, setActive] = useState(cardActive)
    const toggleActive = () => {
        toggleSupplementActive(title, cost, img)
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }
    useEffect(() => {
        setActive(cardActive)
    }, [reset, cardActive])

    return(
        <div className={active ? "supplement_card supplement_active" : "supplement_card"} onClick={() => {toggleActive()}}>
            <img src={backendUrl + img} alt="" />
            <p className="title">{translation[title]}</p>
            <p className="price">{cost} ₽</p>
        </div>
    )
}

export { SupplementCard }