import React from 'react';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import $ from 'jquery';
import FilterLink from './FilterLink';
import ModelLink from './ModelLink';
import List from './List';
import logo_ford from './i/logo-ford.png';
import './AutoList.css';

class AutoList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			model: '',
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
		this.filter = this.filter.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleModel = this.handleModel.bind(this);
	}

	componentDidMount() {
		this.loadItems();
	}

	componentWillUnmount() {
		this.isUnmount = true;
		if (this.controller)
			this.controller.abort();
		this.signal = undefined;
		this.controller = undefined;
	}

	filter(items) {
		let result = [];
		items.map(e => {
			if ((this.state.model === '' || e.model === this.state.model) &&
				(!(this.state.filter["АКПП"] ^ this.state.filter["МКПП"]) || this.state.filter[e.gear])
				)
				result.push(e);
			return (e);
		});
		setTimeout(() => {
			$("a[href='#order-link']").click(e => {
				let c = $(e.target).closest("div").prevAll(".autolist-item-detail").eq(0).html();
				this.props.onButtonClick(e, c);
			});
		}, 500);
		return (result);
	}

	loadItems() {
		if (!this.isUnmount) {
			this.setState({
				items: [],
				isLoaded: false,
			});
		}
		fetch("/cars.json", { signal: this.signal })
			.then(res => res.json())
			.then(
				(result) => {
					this.signal = undefined;
					this.controller = undefined;
					if (!this.isUnmount) {
						this.setState({
							isLoaded: true,
							items: result.cars ? result.cars : [],
						});
					}
				},
				(error) => {
					this.signal = undefined;
					this.controller = undefined;
					if (!this.isUnmount) {
						this.setState({
							isLoaded: true,
							error,
						});
					}
				},
			);
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
					<div className="row">
						<List items={ this.filter(this.state.items) } />
					</div>
				</div>
			</div>
		);
	}
}

export default AutoList;
