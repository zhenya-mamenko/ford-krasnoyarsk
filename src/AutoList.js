import React from 'react';
import logo_ford from './i/logo-ford.png';
import './AutoList.css';

class AutoList extends React.Component {
	render() {
		return (
			<div className="autolist">
				<div className="container">
					<div className="row">
						<div className="autolist-head col-12">{this.props.header}</div>
						<div className="col-12 autolist-block">
							<div className="row">
								<div className="col-md-7 col-sm-7 col-xs-12 autolist-block-menu">
									<a href="#" className="menu-link-select">Kuga</a>
									<a href="#">Focus</a>
									<a href="#">EcoSport</a>
									<a href="#">Mondeo</a>
									<a href="#">Fiesta</a>
								</div>
								<div className="col-md-3 col-sm-3 col-xs-12 autolist-block-filterlink">
									<a href="#" className="filterlink-link-select">АКПП</a>
									<a href="#" className="filterlink-link-select">МКПП</a>
								</div>
								<div className="col-md-2 col-sm-2 col-xs-12 autolist-block-logo">
									<img src={logo_ford} width="114" height="52" alt="" className="ford-logo" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AutoList;
