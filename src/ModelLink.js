import React from 'react';
import PropTypes from 'prop-types';
import './ModelLink.css';

const ModelLink = ({ text, selected, handler }) => (
	<a
		href="#model"
		className={ selected ? "model-link-select" : "" }
		onClick={ (e) => handler(e, text) }
		>
		{text}
	</a>
);

ModelLink.propTypes = {
	text: PropTypes.string.isRequired,
	selected: PropTypes.bool,
	handler: PropTypes.func.isRequired,
};

export default ModelLink;