import { backendUrl } from '../consts'
import './SupplementCard.css'

const SupplementCard = ({ title, cost, img }) => (
    <div className="supplement_card">
        <img src={backendUrl + img} alt="" />
        <p className="title">{title}</p>
        <p className="price">{cost} ₽</p>
    </div>
)

export { SupplementCard }