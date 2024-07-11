import { useState } from "react";
import InputMask from 'react-input-mask';
import "./DebitCard.css";
import { sendPayment } from "../../api/sendPayment";

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
    const setColor = (dirty, value, maskLength) => {
        if (dirty && value.length < maskLength) {
            return "red"
        }
        return "black"
    }

    const payment = async (data) => {
        const responce = await sendPayment(data)
        console.log(data)
        if (responce.success) {
            setModalActive(true)
        }
    }
    
    return (
        <div className="debit_card">
            <div className="container">
                <p>Введите данные карты для оплаты</p>
                <div className="card">
                    <div className="form_item">
                        <label htmlFor="number" style={{color: setColor(numberDirty, number, 9)}}>Номер*</label>
                        <InputMask mask="9999 9999" maskChar="" onBlur={() => {setNumberDirty(true)}} onChange={e => {numberHandler(e)}} type="text" required name="number" placeholder="0000 0000" value={number}/>
                    </div>
                    <div className="secret_data">
                        <div className="form_item">
                            <label htmlFor="validity" style={{color: setColor(validityDirty, validity, 5)}}>Срок*</label>
                            <InputMask mask="99/99" maskChar="" onBlur={() => {setValidityDirty(true)}} onChange={e => {validityHandler(e)}} type="text" name="validity" required placeholder="00/00" value={validity}/>
                        </div>
                        <div className="form_item">
                            <label htmlFor="cvv" style={{color: setColor(cvvDirty, cvv, 3)}}>CVV*</label>
                            <InputMask mask="999" maskChar="" onBlur={() => {setCvvDirty(true)}} onChange={e => {cvvHandler(e)}} type="text" name="cvv" required placeholder="000" value={cvv}/>
                        </div>
                    </div>
                </div>
                <button disabled= {number.length < 9 || validity.length < 5 || cvv.length < 3} onClick={() => {setOrderData(orderData); payment(orderData)}}>Оплатить</button>
            </div>
            
        </div>
    )
}

export {DebitCard}