var React = require("react");
var Bar = require('./Bar');
var Path = require('./Path');
var canvas;
var underscore = require('underscore');
var Canvas = React.createClass({

	componentWillMount: function(){
		this.colorScale = d3.scale.ordinal()
			.domain([d3.range(this.props.colors.length - 1)])
			.range(this.props.colors);

		var data =[parseInt(this.props.A),parseInt(this.props.B)]; 
		this.heightScale = d3.scale.linear()
							.domain([0,d3.max(data)])
							.range([0,150]);

	},

	update_d3: function(){

		var data =[parseInt(this.props.A),parseInt(this.props.B)]; 
		this.heightScale = d3.scale.linear()
							.domain([0,d3.max(data)])
							.range([0,150]);
	},



	makeHist: function(value,i){

	},

	makeBar: function(value,i){
		return <Bar height={this.heightScale(value)} width={30} x={i*40} y={200} color={this.colorScale(i)} key={i} />
	},


 	makePath: function(point,i){
		return <Path colors={this.props.colors} data={point} key={i} color={this.colorScale(i)} />
	},



	render: function(){
		
		var colors = this.props.colors;
		var colorScale = d3.scale.ordinal()
			.domain([d3.range(colors.length - 1)])
			.range(colors);

		var data =[parseInt(this.props.A),parseInt(this.props.B)]; 
		var heightScale = d3.scale.linear()
							.domain([0,d3.max(data)])
							.range([0,150]);

		var availableHeight = 200;

		var bars = data.map(this.makeBar);

		var hists = data.map(this.makeHist);

		var pie = d3.layout.pie()
					.value(function(d){return d});

		var that = this;

		var paths = underscore.map(pie(data),this.makePath);

		var pack = d3.layout.pack()
					.size([50,50])
					.padding(10);

		var nodes = pack.nodes(data);

		return (
			<div>
				<svg width={this.props.width} height={this.props.height} style={{border:'1px solid black'}} >
					<g transform="translate(100,100)">
					{paths}	
					</g>
				</svg>
				<svg width={this.props.width} height={this.props.height} style={{border:'1px solid black'}} >
					<g>
					{bars}	
					</g>
				</svg>
			</div>
		);
	}
});

module.exports = Canvas;