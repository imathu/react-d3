import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from "d3-sankey";
import * as chroma from 'chroma-js';

// S3 sankey example for React
// using React for manipulating the DOM
// using S3 for calculating sankey and layout

// TODO: thanks: https://reactviz.holiday/sankey/

import './Sankey.css';

const SankeyNode = ({ name, x0, x1, y0, y1, color }) => (
    <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={color}>
      <title>{name}</title>
    </rect>
)

const SankeyLink = ({ link, color }) => (
    <path
        className="link"
        d={sankeyLinkHorizontal()(link)}
        style={{
            stroke: color,
            strokeWidth: Math.max(1, link.width),
        }}
    />
)

const D3Sankey = ({ data, width, height }) => {
  const [sankeyData, setSankeyData] = useState(null);

  useEffect(() => {
    // initialize d3 sankey layout
    const s = sankey()
        .nodeWidth(25)
        .nodePadding(30)
        .extent([[1, 1], [width - 5, height - 5]])(data);
    setSankeyData(s);
  }, [data, width, height]);

  if (!sankeyData) return null;

  const colorScale = d3
    .scaleLinear()
    .domain([0, sankeyData.nodes.length])
    .range([0, 1]);
  // const color = chroma.scale("Set3").classes(sankeyData.nodes.length);
  const color = chroma.scale(['fdd49e', '7f0000']).classes(sankeyData.nodes.length);

  return (
    <svg style={{ backgroundColor: 'white', width, height }}>
        <g style={{ mixBlendMode: 'multiply' }}>
            {sankeyData.nodes.map((node, i) => (
            <SankeyNode
                {...node}
                color={color(colorScale(i)).hex()}
                key={node.name}
            />
            ))}
            {sankeyData.links.map((link, i) => (
            <SankeyLink
                link={link}
                color={color(colorScale(link.source.index)).hex()}
            />
            ))}
        </g>
    </svg>
  )
}
D3Sankey.propTypes = {
  data: PropTypes.shape({}).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default D3Sankey;