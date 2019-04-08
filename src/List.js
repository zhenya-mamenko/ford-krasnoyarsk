import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
import Card from './Card';

const List = ({ items }) => (
	<div className="col-12">
		<div className="row">
			<Card
				key="card1"
				image="/i/cars/kuga/kuga-1.jpg"
				name="Ford Kuga Ambiente"
				description={
					<React.Fragment>
						Цвет:&nbsp;&nbsp;черный металлик<br />
						Двигатель:&nbsp;&nbsp;2.5 л<br />
						Коробка:&nbsp;&nbsp;автоматическая
					</React.Fragment>
				}
				buttons={[
					{ type: "benefit", caption: <span>Выгода до 250 000 руб.<sup>2</sup></span>, link: "#order-link" },
					{ type: "price", caption: "ПОЛУЧИТЬ СПЕЦПРЕДЛОЖЕНИЕ", link: "#order-link" },
				]}
			>
				<React.Fragment>
					<p>Дополнительное<br />оборудование</p>
					<b>Пакет &laquo;Комфорт&raquo;: </b>
					<ul>
						<li>Электроподогрев передних сидений</li>
						<li>Электрообогрев лобового стекла и зоны покоя стеклоочистителей</li>
						<li>Электрообогрев рулевого колеса</li>
						<li>2-зонный климат-контроль</li>
						<li>Электронный стояночный тормоз</li>
					</ul>
				</React.Fragment>
			</Card>
		</div>
	</div>
);

List.propTypes = {
	items: PropTypes.array.isRequired,
};

export default List;
