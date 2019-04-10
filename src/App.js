/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Header';
import AButton from './AButton';
import Cover from './Cover';
import Info from './Info';
import Contacts from './Contacts';
import Disclaimer from './Disclaimer';
import SimpleInfo from './SimpleInfo';
import AutoList from './AutoList';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import cover_image from './i/cover.jpg';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			modalCaption: "Оставить заявку",
			content: ""
		};
		this.handleModalClose = this.handleModalClose.bind(this);
		this.handleOrderClick = this.handleOrderClick.bind(this);
		this.handleSendClick = this.handleSendClick.bind(this);
	}

	componentDidMount() {
		$("a[href='#order-call']").click(e => {
			this.handleOrderClick(e);
		});
	}

	handleOrderClick(e, c) {
		e.preventDefault();
		let h = $(e.target).html();
		this.setState({
			modalCaption: h.indexOf("<") !== -1 ? h.substr(0, h.indexOf("<")) : h,
			showModal: true,
			content: c ? c : "",
		});
	}
	handleSendClick(e) {
		e.preventDefault();
		let phone = $("#formPhone").val();
		let name = $("#formName").val();
		let c = this.state.content;
		let v = {};
		let goalParams = {};
		goalParams.type = this.state.modalCaption !== "" ? this.state.modalCaption : "Получить спец.предложение";
		goalParams.model = c.indexOf("<h4>") !== -1 ? c.substr(c.indexOf("<h4>") + 4, c.indexOf("</h4>") - 4) : "-";
		// eslint-disable-next-line no-undef
		ym(52120210, 'reachGoal', 'send_request', goalParams);
		// eslint-disable-next-line no-undef
		fbq('track', 'Lead');
		v.phone = escape(phone);
		v.data = escape("<p> Имя: " + name + "</p>" + c);
		$.ajax({
			"url": "/send.asp",
			"dataType": "html",
			"type": "POST",
			"data": v,
			"cache": false,
			"success": function(data){
				},
			"error":function(){
				alert("AJAX error. Попробуйте ещё раз");
				}
			});

		this.setState({
			showModal: false,
		});
	}

	handleModalClose() {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<div>
				<Header />
				<Cover
					image={cover_image} 
					button={ <AButton link="#order-call" caption="ПОЛУЧИТЬ ФИНАЛЬНУЮ ВЫГОДУ НА FORD" /> }
				/>
				<Info strings={ {
					header: <h2>ЛИКВИДАЦИЯ СКЛАДА АВТОМОБИЛЕЙ<br className="d-none d-lg-block" /> FORD В&nbsp;КРАСНОЯРСКЕ!</h2>,
					col1: <span>Скидка до 585 000 руб.<sup>*</sup></span>,
					col2: <span>Широкий выбор автомобилей в наличии</span>,
					col3: <span>Специальные выгоды по программе Трейд-ин</span>,
					additional: <h3>Количество автомобилей ограничено!</h3>,
					} } />
				<a name="autolist" href="#autolist"></a>
				<AutoList
					header={ <h2>УСПЕЙТЕ ЗАБРАТЬ СВОЙ НОВЫЙ FORD НА БЕСПРЕЦЕДЕНТНЫХ УСЛОВИЯХ:</h2> }
					onButtonClick={ this.handleOrderClick }
				/>
				<a name="estimate" href="#estimate"></a>
				<SimpleInfo
					header={ <h2>ОСТАВЬТЕ ЗАЯВКУ НА ОЦЕНКУ СТАРОГО АВТОМОБИЛЯ</h2> }
					info={
						<span>
							—&nbsp;&nbsp;Принимаем автомобили всех марок<br />
							—&nbsp;&nbsp;Без ограничения по возрасту автомобиля<br />
							—&nbsp;&nbsp;Бесплатная оценка за 15 минут
						</span>
					}
					button={ <AButton link="#order-call" caption="ОСТАВИТЬ ЗАЯВКУ" /> }
				/>
				<a name="contacts" href="#contacts"></a>
				<Contacts />
				<Disclaimer>
					<p>
						<sup>1</sup> Предложение действительно с 3.04.19 и до его отмены. Предложение ограничено количеством автомобилей на складе ООО «ФЦ-Редут». Максимальная выгода достигается при покупке Ford Explorer LIMITED PLUS и включает в себя все действующие предложения. Кредит предоставляет ООО Сетелем банк, лицензии ЦБ РФ №2168 (бессрочные)
						<br /><br /><sup>2</sup> Предложение действительно с 3.04.19 и до его отмены. Предложение ограничено количеством автомобилей на складе ООО «ФЦ-Редут». Максимальная выгода достигается при покупке Ford KugaAmbiente и включает в себя все действующие предложения. Кредит предоставляет ООО Сетелем банк, лицензии ЦБ РФ №2168 (бессрочные).
						<br /><br /><sup>3</sup> Предложение действительно с 3.04.19 и до его отмены. Предложение ограничено количеством автомобилей на складе ООО «ФЦ-Редут». Максимальная выгода достигается при покупке Ford Kuga Trend Plus с объемом двигателя 2,5 л и включает в себя все действующие предложения. Кредит предоставляет ООО Сетелем банк, лицензии ЦБ РФ №2168 (бессрочные).
						<br /><br /><sup>4</sup> Предложение действительно с 3.04.19 и до его отмены. Предложение ограничено количеством автомобилей на складе ООО «ФЦ-Редут». Максимальная выгода достигается при покупке Ford Kuga Trend Plus с объемом двигателя 2,5 л и включает в себя все действующие предложения. Кредит предоставляет ООО Сетелем банк, лицензии ЦБ РФ №2168 (бессрочные).
						<br /><br /><sup>5</sup> Предложение действительно с 3.04.19 и до его отмены. Предложение ограничено количеством автомобилей на складе ООО «ФЦ-Редут». Максимальная выгода достигается при покупке Ford Kuga Trend и включает в себя все действующие предложения. Кредит предоставляет ООО Сетелем банк, лицензии ЦБ РФ №2168 (бессрочные).
						<br /><br /><sup>6</sup> Предложение действительно с 3.04.19 и до его отмены. Предложение ограничено количеством автомобилей на складе ООО «ФЦ-Редут». Максимальная выгода достигается при покупке Ford Kuga Titanium и включает в себя все действующие предложения. Кредит предоставляет ООО Сетелем банк, лицензии ЦБ РФ №2168 (бессрочные).
						<br /><br /><sup>7</sup> Предложение действительно с 3.04.19 и до его отмены. Предложение ограничено количеством автомобилей на складе ООО «ФЦ-Редут». Максимальная выгода достигается при покупке Ford Focus Trend Plus и включает в себя все действующие предложения. Кредит предоставляет ООО Сетелем банк, лицензии ЦБ РФ №2168 (бессрочные).
						<br /><br /><sup>8</sup> Предложение действительно с 3.04.19 и до его отмены. Предложение ограничено количеством автомобилей на складе ООО «ФЦ-Редут». Максимальная выгода достигается при покупке For dFocus WHITE AND BLACK / Titanium и включает в себя все действующие предложения. Кредит предоставляет ООО Сетелем банк, лицензии ЦБ РФ №2168 (бессрочные).
						<br /><br />Вся информация, указанная на сайте, не является гражданской офертой.
						<br /><br />Подробности в ООО «ФЦ-Редут».
						<br /><br />Реальные автомобили могут отличаться от изображенных на картинках.
						<br /><br />Оставляя свои контактные данные (мобильный телефон) в форме обратной связи на данном сайте Вы, в соответствии со статьей 18 Федерального закона «О рекламе» выражаете свое согласие на получение информации рекламного характера от ООО «ФЦ-Редут» распространение которой осуществляется по сетям электросвязи, в том числе, но не ограничиваясь посредством использования телефонной, факсимильной, подвижной радиотелефонной связи, с использованием сети Интернет без каких-либо ограничений. Настоящее согласие может быть отозвано, а данные исправлены путем направления соответствующего письменного уведомления в адрес автосалона «ФЦ-Редут»: 660133, г. Красноярск, ул. Партизана Железняка, 46Д.
						<br />Также подробности можно уточнить по тел. (391) 205-45-15 в рабочее время автосалона «Форд Центр Редут».
					</p>
				</Disclaimer>
				<Modal
					show={this.state.showModal}
					onHide={this.handleModalClose}
					centered
					aria-labelledby="contained-modal-title-vcenter"
				>
					<Modal.Header closeButton>
						<Modal.Title>{ this.state.modalCaption }</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<Row>
								<Col>
									<p>Оставьте Ваши контактные данные, и мененеджер автосалона &laquo;ФЦ-Редут&raquo; свяжется с Вами в ближайшее время!</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form>
										<Form.Group controlId="formPhone">
											<Form.Label>Ваш телефон:</Form.Label>
											<Form.Control type="phone" placeholder="+7 (987) 123-45-60" />
											<Form.Text className="text-muted">
												Пожалуйста, вводите телефон в полном формате
											</Form.Text>
										</Form.Group>
										<Form.Group controlId="formName">
											<Form.Label>Ваше имя:</Form.Label>
											<Form.Control type="text" placeholder="" />
										</Form.Group>
									</Form>
								</Col>
							</Row>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={ this.handleSendClick }>
							Отправить
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default App;
