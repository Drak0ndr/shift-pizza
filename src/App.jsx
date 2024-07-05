import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/Navbar/NavBar'
import { PizzaModal } from './components/PizzaModal/PizzaModal'
import './App.css'
import { Main } from './pages/Main/Main'
import { Basket } from './pages/Basket/Basket';
const App = () => {
	const [modalActive, setModalActive] = useState(false)
	const [modalData, setModalData] = useState({ toppings: [] })
	const [basketData, setBasketData] = useState([])
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element = {<Main setModalActive={setModalActive} setModalData={setModalData} />}/>
					<Route path='/basket' element={<Basket basketData={basketData} setBasketData={setBasketData}/>}/>
				</Routes>
				<PizzaModal active={modalActive} setActive={setModalActive} data={modalData} basketData={basketData} setBasketData={setBasketData} />
			</BrowserRouter>
		</>


	)
}

export default App
