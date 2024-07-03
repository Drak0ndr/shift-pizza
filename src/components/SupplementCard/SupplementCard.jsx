import siteUrl from './../consts.jsx'
import './SupplementCard.css'

const SupplementCard = ({title, cost, img}) => (
    <div className="supplement_card">
        <img src={siteUrl + img} alt="" />
        <p className="title">{title}</p>
        <p className="price">{cost} ₽</p>
    </div>
)

export default SupplementCard