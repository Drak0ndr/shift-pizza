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
					<div className="logo"></div>
				</NavLink>
				
				<div className="links">
					<div>
						<NavLink to={isLogged ? "/profile" : "/auth"}>
							<div className="link">
								<img src={user} alt="" />
								Профиль
							</div>
						</NavLink>
						<div className="link">
							<img src={time} alt="" />
							Заказы
						</div>
					</div>
					<div>
						<NavLink to="/basket">
							<div className="link">
								<img src={basket} alt="" />
								Корзина
							</div>
						</NavLink>
						<NavLink to={isLogged ? "/" : "/auth"} >
							<div className="link" onClick={() => {isLogged ? logout() : ""}}>
								<img src={isLogged ? exit : etrance} alt="" />
								{isLogged ? "Выйти" : "Войти"}
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