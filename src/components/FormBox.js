var React = require("react");

var FormBox = React.createClass({

	handleChange: function(event){
		this.props.updateForm(event);
	},

	render: function(){
		var valueA = this.props.A,
			valueB = this.props.B;
			console.log('props: ', this.props);	
		return (
			<div>
				<input type="number" id="a" value={valueA} onChange={this.handleChange} />
				<br />
				<input type="number" id="b" value={valueB} onChange={this.handleChange} />
				<br />
				<input type="submit" onClick={this.props.draw} />
			</div>
		);
	}
});

module.exports = FormBox;