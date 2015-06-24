var React 		= require("react"),
	FormBox 	= require("./FormBox"),
	Canvas 	= require("./Canvas");
	d3 =require('d3');

var Chart = require('./Chart');

var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f8phwm', x: 11, y: 45, z: 9},
  // ...
];

var Container = React.createClass({

	componentDidMount: function(){
	
	},


	draw: function(){
		this.refs.canvas.drawRect();
	},

	getInitialState: function(){
		return {
			data: [{name: '', value: 1}, {name: '', value: 1}],
			A: 1,
			B: 1,
			width: 200,
			height: 200,
			colors: ["red", "blue"],
			domain: {x: [0, 30], y: [0, 100]},
			sampleData: [
			  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
			  {id: 's4f8phwm', x: 11, y: 45, z: 9},
			  // ...
			]

		}
	},

	updateForm: function(event){
		var value = event.target.value;
		var id = event.target.id;
		if (id==="a") {
			this.setState({A: value}); 
		} else if (id==="b") {
			this.setState({B: value});
		}

		this.refs.canvas.update_d3();
	},

	render: function(){
		return (
			<div>
				<FormBox ref="formbox" draw={this.draw} A={this.state.A} B={this.state.B} updateForm={this.updateForm} />
				<Canvas colors={this.state.colors} ref="canvas" width={this.state.width} height={this.state.height} A={this.state.A} B={this.state.B}  />
				<Chart domain={this.state.domain} sampleData={this.state.sampleData} />
			</div>
		);
	}
});

module.exports = Container;