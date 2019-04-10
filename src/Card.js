/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';
import AButton from "./AButton";
import './Card.css';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.handleDetails = this.handleDetails.bind(this);
	}

	handleDetails(e) {
		e.preventDefault();
		let a = $(e.target);
		if (a.hasClass("detail-more-open")) {
			a.removeClass("detail-more-open").addClass("detail-more-close");
			a.next().removeClass("d-none").addClass("d-block");
		}
		else {
			a.removeClass("detail-more-close").addClass("detail-more-open");
			a.next().addClass("d-none").removeClass("d-block");
		}
	}

	render() {
		return (
			<div className="col-md-4 col-sm-6 col-xs-12 autolist-item">
				<div className="row">
					<div className="col-12 autolist-item-detail-more">
					{
						this.props.children !== false &&
						<React.Fragment>
							<a href="#details" onClick={ e => this.handleDetails(e) } className="detail-more-open"></a>
							<div className="autolist-item-detail-left-hide d-none">
								{ this.props.children }
							</div>
						</React.Fragment>
					}
					</div>
					<div className="col-12 autolist-item-photo">
						<img src={ this.props.image } alt="" />
					</div>
					<div className="col-12 autolist-item-detail">
						<h4>{ this.props.name }</h4>
						{ this.props.description }
					</div>
					{ this.props.buttons.map((b, i) => <div key={ b.type + i } className={ b.type === "benefit" ? "col-12 autolist-item-benefit" : "col-12 autolist-item-price" }>
						<AButton caption={ ReactHtmlParser(b.caption) } link={ b.link } /></div> ) }
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	buttons: PropTypes.array.isRequired,
	description: PropTypes.any.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default Card;
