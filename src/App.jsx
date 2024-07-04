import { useState } from 'react'
import { NavBar } from './components/Navbar/NavBar'
import { PizzaModal } from './components/PizzaModal/PizzaModal'
import './App.css'
import { Main } from './components/Main/Main'
const App = () => {
	const [modalActive, setModalActive] = useState(false)
	const [modalData, setModalData] = useState({ toppings: [] })
	return (
		<>
			<NavBar />
			<Main setModalActive={setModalActive} setModalData={setModalData} />
			<PizzaModal active={modalActive} setActive={setModalActive} data={modalData} />
		</>


	)
}

export default App
