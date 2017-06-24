var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

function getAppState() {
	return {

	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	render: function() {
		return(
			<div>
				<h1>Hello world !</h1>
			</div>
		);
	},

	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;