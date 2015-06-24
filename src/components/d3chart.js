var d3chart = {};


d3chart._drawPoints = function(el,scales,data){
	console.log('calling _drawPoints');
    var g = d3.select(el).selectAll('.d3-points');
	console.log('g created');
 	console.log('data: ', data);

  var point = g.selectAll('.d3-point')
    			.data(data)
    			.enter()
    				.append('circle')
  					.attr('class', 'd3-point')
					.attr('cx', 50 /*function(d){ return scales.x(d.x);}*/ )
  					.attr('cy', 80 /*function(d){ return scales.y(d.y);}*/ )
  					.attr('r', 10 /*function(d){ return scales.z(d.z);}*/ );

	console.log('before exit');

/*  point.exit()
  	.remove();*/
};


d3chart.create = function(el,props,state){
	console.log('create triggered');
	var svg = d3.select(el).append('svg')
				.attr('class', 'd3')
				.attr('width', props.width)
				.attr('height', props.height);


	svg.append('g')
		.attr('class', 'd3-points');
	

	this.update(el,state);

};

d3chart.update = function(el,state){
	console.log('state in update: ', state);
	var scales = this._scales(el, state.domain);
	this._drawPoints(el,scales,state.data); 
};

d3chart.destroy = function(el){

};




d3chart._scales = function(el, domain) {
  if (!domain) {
    return null;
  }

  var width = 15;
  var height = 15;

  var x = d3.scale.linear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scale.linear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scale.linear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};

module.exports = d3chart;