"use strict";

var React = require("react"),
	Container = require("./components/Container");

var rootEl = document.getElementById("content");

var App = React.createClass({
	render: function(){
		return (
			<div>
				<Container />
			</div>
		);
	}
});

React.render(<App/>, rootEl);

