import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ caption, link }) => (
	<a href={ link } className="order-button">{ caption }</a>
);

Button.propTypes = {
	caption: PropTypes.any.isRequired,
	link: PropTypes.string.isRequired,
};

export default Button;
