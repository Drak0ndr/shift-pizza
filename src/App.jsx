import { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import Main from './components/Main/Main'
import PizzaModal from './components/PizzaModal/PizzaModal'
import './App.css'
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
