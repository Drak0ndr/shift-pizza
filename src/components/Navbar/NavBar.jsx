import user from "./../../img/User.svg"
import time from "./../../img/Time.svg"
import basket from "./../../img/basket.svg"
import exit from "./../../img/Exit.svg"
import './NavBar.css'
const NavBar =() => (
	<>
		<nav>
			<div className='container'>
				<div className="logo">
				</div>
				<div className="links">
					<div>
						<div className="link">
							<img src={user} alt="" />
							Профиль
						</div>
						<div className="link">
							<img src={time} alt="" />
							Заказы
						</div>
					</div>
					<div>
						<div className="link">
							<img src={basket} alt="" />
							Корзина
						</div>
						<div className="link">
							<img src={exit} alt="" />
							Выйти
						</div>
					</div>
				</div>
			</div>
		</nav>
		<hr />
	</>
)

export default NavBar