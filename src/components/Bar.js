var React = require('react');

var Bar = React.createClass({
	render: function(){
		return (
			<rect 	fill   = {this.props.color} 
					width  = {this.props.width} 
					height = {this.props.height}
					x 	   = {this.props.x}
					y	   = {this.props.y - this.props.height} />
			);
	}
});


module.exports = Bar;