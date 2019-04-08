import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
import Card from './Card';

const List = ({ items }) => (
	<div className="col-12">
		<div className="row">
			{ items.map((e, i) =>
				<Card
					key={ "card" + i }
					image={ e.image }
					name={ e.name }
					description={ e.description }
					buttons={ e.buttons }
				>
					{ e.gift !== false ?
						[<React.Fragment>,
						e.gift,
						</React.Fragment>]
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
