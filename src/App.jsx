import './App.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import PizzaModal from './components/PizzaModal'
import { useState } from 'react'
function App() {
	const [modalActive, setModalActive] = useState(false)
	const [modalData, setModalData] = useState({toppings:[]})
	return (
		<>
		<NavBar />
		<Main setModalActive={setModalActive} setModalData={setModalData}/>
		<PizzaModal active={modalActive} setActive={setModalActive} data={modalData}/>
		</>
		
		
	)
}

export default App
