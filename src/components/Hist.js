var React = require('react');


var Hist = React.createClass({

	

	render: function(){

		return (
			<g className="arc">
				<path d={arc(this.props.data)} fill={this.props.color}  >
				</path>
				<text text-anchor="middle" transform={translate} fill="white">{this.props.data.data}</text>
			</g>
			);
	}
});


module.exports = Path;