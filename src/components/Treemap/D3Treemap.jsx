import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import * as d3 from 'd3';

// S3 treemap example for React
// using React for manipulating the DOM
// using S3 for calculating the treemap and layout

const D3Treemap = ({ data, width, height, title }) => {
  const [treemapData, setTreemapData] = useState(null);

  useEffect(() => {
    // initialize the treemap using s3 hierarchy & treemap functions
    const hierarchy = d3.hierarchy(data).sum(function(d){return d.value});
    const treemap = d3.treemap()
      .paddingTop((title) ? 28 : 1)
      .paddingBottom(1)
      .paddingRight(7)
      .paddingInner(4) 
      .size([width, height])(hierarchy)
    setTreemapData(treemap);
  }, [data, width, height, title]);

  return (
    <svg style={{ backgroundColor: 'white', width, height }}>
      {treemapData && treemapData.leaves().map(d => (
        <rect style={{
          x: d.x0,
          y: d.y0,
          width: d.x1 - d.x0,
          height: d.y1 - d.y0,
          stroke: (d.data.state === true) ? "#D2222D" : "#238823",
          fill: (d.data.state === true) ? "#D2222D" : "#238823",
          "fill-opacity": "0.8",
          "stroke-width": "3",
          rx: "3",
        }} />
      ))}
      {treemapData && treemapData.leaves().map(d => (
        <text x={d.x0 + 5} y={d.y0 + 20} fontSize='15px' fill='lightgray'>{d.data.name}</text>
      ))}
      {title && treemapData && treemapData.descendants().filter(function(d){return d.depth===1}).map(d => (
        <text x={d.x0} y={d.y0 + 21} fontSize='19px' fill='gray'>{d.data.name}</text>
      ))}
    </svg>
  )
}
D3Treemap.propTypes = {
  data: PropTypes.shape({}).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  title: PropTypes.bool,
}
D3Treemap.defaultProps = {
  title: false,
}

export default D3Treemap;