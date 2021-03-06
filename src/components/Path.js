var React = require('react');


var Path = React.createClass({
	render: function(){
		var colors = this.props.colors;
		
		var arc = d3.svg.arc()
			.outerRadius(50)
			.innerRadius(30);

		var color = d3.scale.ordinal()
			.domain([d3.range(colors.length - 1)])
			.range(colors);

		var centre = arc.centroid(this.props.data)
		var translate = "translate(" + centre + ")"; 

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