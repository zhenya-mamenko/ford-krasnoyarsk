import React from 'react';
import PropTypes from 'prop-types';
import './Cover.css';

const Cover = ({ button, image }) => (
	<div>
		<div className="band cover-block">
			<img src={image} alt="" />
		</div>
		<div className="cover-btn">
			<div className="container">
				<div className="col-md-6 col-sm-8 col-xs-12 offset-md-3 offset-sm-2">
					{button}
				</div>
			</div>
		</div>
	</div>
);

Cover.propTypes = {
	button: PropTypes.element.isRequired,
	image: PropTypes.string.isRequired,
};

export default Cover;