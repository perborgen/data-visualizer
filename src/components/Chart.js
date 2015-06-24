var React = require('react');
var d3chart = require('./d3chart');

var Chart = React.createClass({
	propTypes: {
	    data: React.PropTypes.array,
	    domain: React.PropTypes.object	
	},

	componentDidMount: function(){
		console.log('component did mount');
		var el = this.getDOMNode();

		var state = this.getChartState();
		console.log('state in componenet: ', state);

		d3chart.create(el, {
     	  width: '100%',
          height: '300px'
    	}, this.getChartState());



	},

	componentDidUpdate: function(){
		var el = this.getDOMNode();
		d3chart.update(el,this.getChartState());
	},

	getChartState: function(){
		return {
			data: this.props.domain,
			domain: this.props.domain
		};
	},

	componentWillUnmount: function(){
		var el = this.getDOMNode();
		d3chart.destroy(el);
	},

	render: function(){
		return(<div className="Chart"></div>
		);
	}
});

module.exports = Chart;