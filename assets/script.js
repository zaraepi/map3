
//skills data
var skills = [
				{name:'HTML', value:90},
				{name:'CSS', value:85},
				{name:'Design', value:70},
				{name:'UX', value:60},
				{name:'JS', value:65},
				{name:'Design', value:40},
			];

//build a colour generator

var colGen = d3.scaleOrdinal(d3.schemeAccent);
//var colGen = d3.scaleOrdinal(['red','blue','green','black']);

var chart = d3.select('#skills')
				.append('g')
				.attr('transform','translate(100,50)');

var bars = chart.selectAll('rect').data(skills);

bars.enter()
	.append('rect')
	.attr('class','bar')
	.attr('fill',function(d,i){ return colGen(i)})
	.attr('width',50)
	.attr('x',function(d,i){ return i*100 })

	.attr('height',0)
	.attr('y',500)

	.transition()
	.duration(1000)

	.attr('height',function(d){ return d.value * 5})
	.attr('y',function(d){ return 500 - d.value*5 });


var names = chart.selectAll('text').data(skills);

names.enter()
	.append('text')
	.style('alignment-baseline', 'hanging')
	.style('text-anchor', 'middle')
	.style('font-family', 'Verdana')
	.style('font-size', '15')
	.text(function(d){ return d.name})
	.attr('y',505)
	.attr('x',function(d,i){ return i*100 + 25});

//tool tip

var tooltip = chart.append('g')
				.style('opacity',0)
				.attr('class','tooltip');


tooltip.append('rect')
		.attr('width',100)
		.attr('height',50)
		.attr('fill','rgba(0,0,0,0.3)');

var tooltipText = tooltip.append('text')
						.text('bla')
						.attr('x',50)
						.attr('y',25)
						.style('alignment-baseline', 'middle')
						.style('text-anchor', 'middle');

bars = chart.selectAll('.bar');

//mouse events
bars.on('mouseover',function(d){

	tooltip.style('opacity',1);
	tooltipText.text(d.name + ' : '+ d.value);
});

bars.on('mouseout',function(d){
	//tooltip.style('opacity',0);
});

bars.on('mousemove',function(d){

	var mousePos = d3.mouse(this.parentNode);
	var xPos = mousePos[0]+20;
	var yPos = mousePos[1]+20;

	tooltip.attr('transform', 'translate('+xPos+','+yPos+')');

});

























