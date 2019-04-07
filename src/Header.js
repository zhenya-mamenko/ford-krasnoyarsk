import React from 'react'
import logo_ford from './i/logo-ford.png'
import logo_redut from './i/logo-redut.png'
import './Header.css'

const Header = () => (
	<header>
		<div className="header navbar-fixed-top d-none d-sm-block">
			<div className="container">
				<div className="row">
					<div className="header-logo col-lg-3 col-md-3 col-sm-4 col-xs-3">
						<nobr>
								<img src={logo_ford} width="114" height="52" alt="" className="ford-logo" />
								<img src={logo_redut} width="50" height="77" alt="" />
						</nobr>
					</div>
					<div className="header-name col-lg-3 col-md-3 col-sm-3  ">
							<h3>ООО &laquo;ФЦ-РЕДУТ&raquo;</h3>
					</div>
					<div className="header-btn col-lg-3 col-md-3 col-sm-2 hidden-sm">
							<a href="#order-call" className="button">Заказать звонок</a>
					</div>
					<div className="header-phone col-lg-3 col-md-3 col-sm-5 ">
							<div className="header-phone-number">+7 (391) 205-45-15</div>
							<div className="header-phone-address">г. Красноярск, ул. Партизана Железняка, 46 &laquo;Д&raquo;</div>
					</div>
				</div>
			</div>
		</div>

		<div className="header-mobile d-block d-sm-none">
			<div className="container">
				<div className="row">
					<div className="header-logo col-xs-12">
						<nobr>
								<img src={logo_ford} width="114" height="52" alt="" className="ford-logo" />
								<img src={logo_redut} width="50" height="77" alt="" />
						</nobr>
					</div>
					<div className="header-name col-xs-12">
							<h3>ООО &laquo;ФЦ-РЕДУТ&raquo;</h3>
					</div>
					<div className="header-phone col-xs-12">
							<div className="header-phone-number">+7 (391) 205-45-15</div>
							<div className="header-phone-adddress">г. Красноярск, <br />ул. Партизана Железняка, 46 &laquo;Д&raquo;</div>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;