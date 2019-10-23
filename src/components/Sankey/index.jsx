import React from 'react';
import { Header } from 'semantic-ui-react';
import Sankey from './Sankey';

import { data } from './data';

// example component that renders 2 different treemap examples
const SankeyExample = () => (
  <div className="App">
    <Header as="h1">responsive sankey example</Header>
        inspired by
    {' '}
    <a href="https://reactviz.holiday/sankey">https://reactviz.holiday/sankey</a>
    <hr />
    <div style={{ paddingTop: '50px' }}>
      <Sankey data={data} height={300} />
    </div>
  </div>
);

export default SankeyExample;
