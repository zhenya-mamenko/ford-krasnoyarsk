import React from 'react';
import './Disclaimer.css';

const Disclaimer = ({ children }) => (
	<div className="disclaimer">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-sm-12 col-xs-12">
				{children}
				</div>
			</div>
		</div>
	</div>
);

export default Disclaimer;