import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/Navbar/NavBar'
import { PizzaModal } from './components/PizzaModal/PizzaModal'
import './App.css'
import { Main } from './pages/Main/Main'
import { Basket } from './pages/Basket/Basket';
import { OrderForm } from './pages/OrderForm/OrderForm';
import { DebitCard } from './pages/DebitCard/DebitCard';
const App = () => {
	const [modalActive, setModalActive] = useState(false)
	const [modalData, setModalData] = useState({ toppings: [] })
	const [basketData, setBasketData] = useState([])
	const [orderData, setOrderData] = useState({receiverAddress: {}, person: {}, debitCard:{}, pizzas: []})
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element = {<Main setModalActive={setModalActive} setModalData={setModalData} />}/>
					<Route path='/basket' element={<Basket basketData={basketData} setBasketData={setBasketData} orderData={orderData} setOrderData={setOrderData}/>}/>
					<Route path='/orderForm' element={<OrderForm orderData={orderData} setOrderData={setOrderData}/>}/>
					<Route path='/debitCard' element={<DebitCard orderData={orderData} setOrderData={setOrderData}/>}/>
				</Routes>
				<PizzaModal active={modalActive} setActive={setModalActive} data={modalData} basketData={basketData} setBasketData={setBasketData} />
			</BrowserRouter>
		</>


	)
}

export default App
