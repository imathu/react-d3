import * as d3 from 'd3';

class D3Component {

  containerEl;
  props;
  svg;

  constructor(containerEl, props, title=false) {
    this.containerEl = containerEl;
    this.props = props;
    const { width, height, data } = props;
    this.data = data;
    this.title = title;
    this.svg = d3.select(containerEl)
      .append('svg')
      .style('background-color', 'white')
      .attr('width', width)
      .attr('height', height);
    this.updateDatapoints();
  }

  draw = (width, height) => {
    const { svg } = this;
    d3.treemap()
    .paddingTop((this.title) ? 28 : 0)
    .paddingRight(7)
    .paddingInner(3) 
    .size([width, height])(this.root)

    svg
    .selectAll("rect")
    .data(this.root.leaves())
    .enter()
    .append("rect")
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .style("stroke", "black")
      .style("fill", d => {
        return (d.data.state === true) ? "#43C275" : "#C5202A";
      })

    svg
      .selectAll("text")
      .data(this.root.leaves())
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
        .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
        .text(function(d){ return d.data.name })
        .attr("font-size", "15px")
        .attr("fill", "white")

      if (this.title) {
        svg
      .selectAll("titles")
      .data(this.root.descendants().filter(function(d){return d.depth===1}))
      .enter()
      .append("text")
        .attr("x", function(d){ return d.x0})
        .attr("y", function(d){ return d.y0+21})
        .text(function(d){ return d.data.name })
        .attr("font-size", "19px")
        .attr("fill",  "gray")
      }
  }

  updateDatapoints = () => {
    const { props: { width, height, data } } = this;
    const root = d3.hierarchy(data).sum(function(d){ return d.value})
          this.root = root;
          this.draw(width, height);        
  }

  setActiveDatapoint = (d, node) => {
    d3.select(node).style('fill', 'yellow');
    this.props.onDatapointClick(d);
  }

  resize = (width, height) => {
    const { svg } = this;
    svg.attr('width', width)
    .attr('height', height);
    svg.selectAll("*").remove();
    this.draw(width, height);
  }
}

export default D3Component;