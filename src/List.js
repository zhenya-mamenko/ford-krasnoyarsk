import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
import Card from './Card';
import ReactHtmlParser from 'react-html-parser';

const List = ({ items }) => (
	<div className="col-12">
		<div className="row">
			{ items.map((e, i) =>
				<Card
					key={ "card" + i }
					image={ e.image }
					name={ e.name }
					description={ ReactHtmlParser(e.description) }
					buttons={ e.buttons }
				>
					{ e.gift !== false ?
						ReactHtmlParser("<div>" + e.gift.join("\n") + "</div>")
						: false
					}
				</Card>
			) }
		</div>
	</div>
);

List.propTypes = {
	items: PropTypes.array.isRequired,
};

export default List;
