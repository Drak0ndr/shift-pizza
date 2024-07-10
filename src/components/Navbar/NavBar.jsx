import { NavLink } from "react-router-dom"
import user from "./../../img/User.svg"
import time from "./../../img/Time.svg"
import basket from "./../../img/basket.svg"
import exit from "./../../img/Exit.svg"
import etrance from "./../../img/Etrance.svg"
import "./NavBar.css"
const NavBar = ({isLogged, logout}) => (
	<>
		<nav>
			<div className='container'>
				<NavLink to="/">
					<div className="logo"/>
				</NavLink>
				
				<div className="links">
					<div>
						<NavLink to={isLogged ? "/profile" : "/auth"}>
							<div className="link">
								<img src={user} alt="" />
								<span>Профиль</span>
							</div>
						</NavLink>
						<NavLink to="/orders">
							<div className="link">
								<img src={time} alt="" />
								<span>Заказы</span>
							</div>
						</NavLink>
					</div>
					<div>
						<NavLink to="/basket">
							<div className="link">
								<img src={basket} alt="" />
								<span>Корзина</span>
							</div>
						</NavLink>
						<NavLink to={isLogged ? "/" : "/auth"} >
							<div className="link" onClick={() => {isLogged ? logout() : ""}}>
								<img src={isLogged ? exit : etrance} alt="" />
								{isLogged ? <span>Выйти</span> : <span>Войти</span>}
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
		<hr />
	</>
)

export { NavBar }