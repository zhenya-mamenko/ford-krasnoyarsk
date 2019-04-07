import React from 'react';
import PropTypes from 'prop-types';
import './FilterLink.css';

const FilterLink = ({ text, selected, handler }) => (
	<a
		href="#filter"
		className={ selected ? "filterlink-link-select" : "" }
		onClick={ (e) => handler(e, text) }
		>
		{text}
	</a>
);

FilterLink.propTypes = {
	text: PropTypes.string.isRequired,
	selected: PropTypes.bool,
	handler: PropTypes.func.isRequired,
};

export default FilterLink;