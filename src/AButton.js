import React from 'react';
import PropTypes from 'prop-types';
import './AButton.css';

const AButton = ({ caption, link }) => (
	<a href={ link } className="order-button">{ caption }</a>
);

AButton.propTypes = {
	caption: PropTypes.any.isRequired,
	link: PropTypes.string.isRequired,
};

export default AButton;
