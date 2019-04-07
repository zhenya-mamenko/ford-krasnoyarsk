import React from 'react';
import PropTypes from 'prop-types';
import './SimpleInfo.css';

const SimpleInfo = ({ header, info }) => (
	<div className="band simpleinfo-block">
		<div className="container">
			<div className="row">
				{header}
				<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
					{info}
				</div>
				<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 offset-md-0 offset-sm-3 offset-xs-0">
					<a href="#order-call" className="order-button">ОСТАВИТЬ ЗАЯВКУ</a>
				</div>
			</div>
		</div>
	</div>
);

SimpleInfo.propTypes = {
	header: PropTypes.element.isRequired,
	info: PropTypes.element.isRequired,
};

export default SimpleInfo;