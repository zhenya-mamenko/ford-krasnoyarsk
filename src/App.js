import React, { Component } from 'react';
import Header from './Header';
import Cover from './Cover';
import Info from './Info';
import Contacts from './Contacts';
import cover_image from './i/cover.jpg';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Cover image={cover_image} />
				<Info strings={ {
					header: <h2>ЛИКВИДАЦИЯ СКЛАДА АВТОМОБИЛЕЙ<br className="d-none d-lg-block" /> FORD В&nbsp;КРАСНОЯРСКЕ!</h2>,
					col1: <span>Скидка до 585 000 руб.<sup>*</sup></span>,
					col2: <span>Широкий выбор автомобилей в наличии</span>,
					col3: <span>Специальные выгоды по программе Трейд-ин</span>,
					additional: <h3>Количество автомобилей ограничено!</h3>,
					} } />
				<Contacts />
			</div>
		);
	}
}

export default App;
