import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './Contacts.css';

const Contacts = () => (
	<div>
		<div className="band contact-block">
			<div className="container">
				<div className="row">
						<div className="col-12"><h2>КОНТАКТЫ</h2></div>
						<div className="contact-block-name col-md-4 col-sm-3 col-xs-12">Форд Центр Редут</div>
						<div className="contact-block-phone col-md-4 col-sm-4 col-xs-12"><a href="tel:+73912054515">+7 (391) 205-45-15</a></div>
						<div className="contact-block-address col-md-4 col-sm-5 col-xs-12">г. Красноярск, <br className="d-none d-md-block" />ул. Партизана Железняка, 46 &laquo;Д&raquo;</div>
				</div>
			</div>
		</div>

		<div className="container map-block">
			<YMaps>
				<Map defaultState={{ center: [56.04012895590737, 92.93017536402276], zoom: 17 }}
					width="100%"
					height={405}
					type="yandex#map"
				>
				<Placemark
					geometry={ [56.04027908741179, 92.92925277909775] }
					properties={ {iconCaption: "Форд Центр Редут"} }
					options ={ {"zIndex":800000000,"order":800000000,"preset":"islands#blueAutoIcon"} }
				/>
				</Map>
			</YMaps>
		</div>
	</div>
);


export default Contacts;