import * as d3 from 'd3';
let node = document.createElement('div');

let width = 450;
let height = 450;
let margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
let radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
let svg = d3
  .select(node)
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

// Create dummy data
let data: { [key: string]: any } = { a: 9, b: 20, c: 30 };

// set the color scale
let color = d3
  .scaleOrdinal()
  // .domain(data)
  .range(['#f4b400', '#4285f4', '#db4437']);

// Compute the position of each group on the pie:
let pie = d3.pie().value(function (d: any) {
  return d.value;
});
// @ts-ignore: types...
let data_ready = pie(d3.entries(data));

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  // @ts-ignore: types...
  .attr('d', d3.arc().innerRadius(0).outerRadius(radius))
  .attr('fill', function (d: any) {
    return color(d.data.key);
  });

export default node;
