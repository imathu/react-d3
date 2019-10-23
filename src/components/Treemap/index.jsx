import React from 'react';
import { Header } from 'semantic-ui-react';
import Treemap from './Treemap';

import { data2, data1 } from './data';

// example component that renders 2 different treemap examples
const TreemapExample = () => (
  <div className="App">
    <Header as="h1">responsive treemap examples</Header>
    <hr />
    <div style={{ paddingTop: '50px' }}>
      <Header as="h2">simple version</Header>
      <Treemap data={data1} height={150} />
    </div>
    <div style={{ paddingTop: '50px' }}>
      <Header as="h2">cluster groups</Header>
      <Treemap data={data2} height={300} title />
    </div>
  </div>
);

export default TreemapExample;
