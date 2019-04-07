import React from 'react';
import PropTypes from 'prop-types';
import './Cover.css';

const Cover = ({ image }) => (
	<div>
		<div className="band cover-block">
			<img src={image} alt="" />
		</div>
		<div className="cover-btn">
			<div className="container">
				<div className="col-md-6 col-sm-8 col-xs-12 offset-md-3 offset-sm-2">
					<a href="#order-call" className="order-button">ПОЛУЧИТЬ ФИНАЛЬНУЮ ВЫГОДУ НА FORD</a>
				</div>
			</div>
		</div>
	</div>
);

Cover.propTypes = {
	image: PropTypes.string.isRequired,
};

export default Cover;