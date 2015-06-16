var React 		= require("react"),
	FormBox 	= require("./FormBox"),
	Canvas 	= require("./Canvas");
	d3 =require('d3');

var Container = React.createClass({

	componentDidMount: function(){
	
	},


	draw: function(){
		this.refs.canvas.drawRect();
	},

	getInitialState: function(){
		return {
			A: 1,
			B: 1,
			width: 200,
			height: 200,
			colors: ["red", "blue"]
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
	},

	render: function(){
		return (
			<div>
				<FormBox ref="formbox" draw={this.draw} A={this.state.A} B={this.state.B} updateForm={this.updateForm} />
				<Canvas colors={this.state.colors} ref="canvas" width={this.state.width} height={this.state.height} A={this.state.A} B={this.state.B}  />
			</div>
		);
	}
});

module.exports = Container;