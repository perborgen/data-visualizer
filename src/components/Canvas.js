var React 		= require("react");
var Bar = require('./Bar');
var Path = require('./Path');
var canvas;
var underscore = require('underscore');
var Canvas = React.createClass({

	componentDidMount: function(){
/*		canvas = d3.select("body")
			.append("svg")
			.attr("width", this.props.width)
			.attr("height",this.props.height)
			.attr("ref", "svg")
            .style("border", "1px solid black");*/
	},

	drawRect: function(){

		/*var data = [this.props.A,this.props.B];

		var color = d3.scale.ordinal()
					.range(['red','blue']);

		var pie = d3.layout.pie()
					.value(function(d){return d});

		var arc = d3.svg.arc()
					.innerRadius(40)
					.outerRadius(50);


		var group = canvas.append("g")
					.attr("transform", "translate(50,50)");

		var arcs = group.selectAll(".arc")
					.data(pie(data))
					.enter()
						.append("g")
						.attr("class", "arc")
						.append("path")
						.attr("d", arc)
						.attr("fill", function(d){ return color(d.data)});
*/
/*
		canvas.selectAll("rect")
		.data(data)
		.enter()
			.append("rect")
			.attr("width", 20)
			.attr("height", function(d){ return d*30 })
			.attr("x", function(d,i){ return i*40})
			.attr("y", function(d){ return 200 - (d*30)})
			.attr("fill", "green");*/
	},

	render: function(){

		var color = d3.scale.ordinal()
					.range(['red','blue']);

		var availableHeight = 200;
		var data = [this.props.A,this.props.B];

		var bars = data.map(function(value,i){
			return <Bar height={value} width={30} x={i*40} y={availableHeight} color="blue" key={i} />
		});

		var pie = d3.layout.pie()
					.value(function(d){return d});

		var that = this;
		var paths = underscore.map(pie(data), function(point,i){
			return <Path colors={that.props.colors} data={point} key={i} index={i} />
		});



		return (
			<svg width={this.props.width} height={this.props.height} style={{border:'1px solid black'}} >
				<g transform="translate(50,50)">
				{paths}	
				</g>
			</svg>
		);
	}
});

module.exports = Canvas;