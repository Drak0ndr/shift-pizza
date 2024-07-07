import { useState } from "react";
import "./DebitCard.css";

const DebitCard = ({orderData, setOrderData, setModalActive}) => {
    const [number, setNumber] = useState("")
    const [validity, setValidity] = useState("")
    const [cvv, setCvv] = useState("")

    const [numberDirty, setNumberDirty] = useState(false)
    const [validityDirty, setValidityDirty] = useState(false)
    const [cvvDirty, setCvvDirty] = useState(false)
    const numberHandler = e => {
        setNumber(e.target.value)
        orderData.debitCard.pan = e.target.value
    }
    const validityHandler = e => {
        setValidity(e.target.value)
        orderData.debitCard.expireDate = e.target.value
    }
    const cvvHandler = e => {
        setCvv(e.target.value)
        orderData.debitCard.cvv = e.target.value
    }
    const setColor = (dirty, value) => {
        if (dirty && value=="") {
            return "red"
        }
        return "black"
    }
    return (
        <div className="debit_card">
            <div className="container">
                <p>Введите данные карты для оплаты</p>
                <div className="card">
                    <div className="form_item">
                        <label htmlFor="number" style={{color: setColor(numberDirty, number)}}>Номер*</label>
                        <input onBlur={() => {setNumberDirty(true)}} onChange={e => {numberHandler(e)}} type="text" required name="number" placeholder="0000 0000" value={number}/>
                    </div>
                    <div className="secret_data">
                        <div className="form_item">
                            <label htmlFor="validity" style={{color: setColor(validityDirty, validity)}}>Срок*</label>
                            <input onBlur={() => {setValidityDirty(true)}} onChange={e => {validityHandler(e)}} type="text" name="validity" required placeholder="00/00" value={validity}/>
                        </div>
                        <div className="form_item">
                            <label htmlFor="cvv" style={{color: setColor(cvvDirty, cvv)}}>CVV*</label>
                            <input onBlur={() => {setCvvDirty(true)}} onChange={e => {cvvHandler(e)}} type="text" name="cvv" required placeholder="000" value={cvv}/>
                        </div>
                    </div>
                </div>
                <button disabled= {number=="" || validity == "" || cvv==""} onClick={() => {setOrderData(orderData);setModalActive(true)}}>Оплатить</button>
            </div>
            
        </div>
    )
}

export {DebitCard}