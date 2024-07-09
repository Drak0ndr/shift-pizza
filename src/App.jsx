import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/Navbar/NavBar'
import { PizzaModal } from './components/PizzaModal/PizzaModal'
import './App.css'
import { Main } from './pages/Main/Main'
import { Basket } from './pages/Basket/Basket';
import { OrderForm } from './pages/OrderForm/OrderForm';
import { DebitCard } from './pages/DebitCard/DebitCard';
import { PaymentModal } from './components/PaymentModal/PaymentModal';
import { Authorization } from './pages/Authorization/Authorization';
import { Profile } from './pages/Profile/Profile';
import { Orders } from './pages/Orders/Orders';
const App = () => {
	const [modalActive, setModalActive] = useState(false)
	const [modalData, setModalData] = useState({ toppings: [] })
	const [basketData, setBasketData] = useState([])
	const [orderData, setOrderData] = useState({receiverAddress: {}, person: {}, debitCard:{}, pizzas: []})
	const [paymentModalActive, setPaymentModalActive] = useState(false)
	const [isLogged, setIsLogged] = useState(localStorage.getItem("userToken") ? true : false)

	const logout = () => {
		localStorage.removeItem("userToken")
		setIsLogged(false)
	}
	const login = (token) => {
		localStorage.setItem("userToken", token)
		setIsLogged(true)
	}

	return (
		<>
			<BrowserRouter>
				<NavBar isLogged={isLogged} logout={logout}/>
				<Routes>
					<Route path='/' element = {<Main setModalActive={setModalActive} setModalData={setModalData} />}/>
					<Route path='/basket' element={<Basket basketData={basketData} setBasketData={setBasketData} orderData={orderData} setOrderData={setOrderData}/>}/>
					<Route path='/orderForm' element={<OrderForm orderData={orderData} setOrderData={setOrderData} isLogged={isLogged}/>}/>
					<Route path='/debitCard' element={<DebitCard orderData={orderData} setOrderData={setOrderData} setModalActive={setPaymentModalActive}/>}/>
					<Route path='/auth' element={<Authorization login={login}/>}/>
					<Route path='/profile' element={<Profile/>}/>
					<Route path='/orders' element={<Orders isLogged={isLogged}/>}/>
				</Routes>
				<PizzaModal active={modalActive} setActive={setModalActive} data={modalData} basketData={basketData} setBasketData={setBasketData} />
				<PaymentModal active={paymentModalActive} setActive={setPaymentModalActive} orderData={orderData}/>
			</BrowserRouter>
		</>
	)
}

export default App
