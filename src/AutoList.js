import React from 'react';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import FilterLink from './FilterLink';
import ModelLink from './ModelLink';
import logo_ford from './i/logo-ford.png';
import './AutoList.css';

class AutoList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			model: 'Kuga',
			filter: {
				"АКПП": true,
				"МКПП": true,
			},
			items: [],
			isLoaded: false,
			error: null,
		};
		this.isUnmount = false;
		this.controller = new AbortController();
		this.signal = this.controller.signal;
		this.handleFilter = this.handleFilter.bind(this);
		this.handleModel = this.handleModel.bind(this);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		this.isUnmount = true;
		if (this.controller)
			this.controller.abort();
		this.signal = undefined;
		this.controller = undefined;
	}

	handleFilter(e, text) {
		e.preventDefault();
		this.setState((state) => {
			state.filter[text] = !state.filter[text];
			return (state);
		});
	}

	handleModel(e, model) {
		e.preventDefault();
		this.setState({ model: (this.state.model !== model) ? model : "" });
	}

	render() {
		return (
			<div className="autolist">
				<div className="container">
					<div className="row">
						<div className="autolist-head col-12">{this.props.header}</div>
						<div className="col-12 autolist-block">
							<div className="row">
								<div className="col-md-7 col-sm-7 col-xs-12 autolist-block-menu">
									<ModelLink text="Kuga" handler={this.handleModel} selected={this.state.model === "Kuga"} />
									<ModelLink text="Focus" handler={this.handleModel} selected={this.state.model === "Focus"} />
									<ModelLink text="EcoSport" handler={this.handleModel} selected={this.state.model === "EcoSport"} />
									<ModelLink text="Mondeo" handler={this.handleModel} selected={this.state.model === "Mondeo"} />
									<ModelLink text="Fiesta" handler={this.handleModel} selected={this.state.model === "Fiesta"} />
								</div>
								<div className="col-md-3 col-sm-3 col-xs-12 autolist-block-filterlink">
									<FilterLink text="АКПП" handler={this.handleFilter} selected={this.state.filter["АКПП"]} />
									<FilterLink text="МКПП" handler={this.handleFilter} selected={this.state.filter["МКПП"]} />
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
