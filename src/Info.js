import React from 'react';
import PropTypes from 'prop-types';
import './Info.css';

const Info = ({ strings }) => (
	<div>
		<div className="band info-block">
			<div className="container">
				<div className="row">
					<div className="info-block-head col-12">{strings.header}</div>
					<div className="col-12 info-block-list">
						<div className="col-md-4 col-sm-4 col-xs-12 info-block-list-item">{strings.col1}</div>
						<div className="col-md-4 col-sm-4 col-xs-12 info-block-list-item">{strings.col2}</div>
						<div className="col-md-4 col-sm-4 col-xs-12 info-block-list-item">{strings.col3}</div>
					</div>
					<div className="col-12">{strings.additional}</div>
				</div>
			</div>
		</div>
	</div>
);

Info.propTypes = {
	strings: PropTypes.object.isRequired,
};

export default Info;