function SupplementCard({title, cost, img}) {
    return (
        <div className="supplement_card">
            <img src={"https://shift-backend.onrender.com" + img} alt="" />
            <p className="title">{title}</p>
            <p className="price">{cost} Р</p>
        </div>
    )
}

export default SupplementCard