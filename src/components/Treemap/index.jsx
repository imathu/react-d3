import React from 'react';
import Treemap from './Treemap';

import { Header } from 'semantic-ui-react';
import { data2, data1 } from './data';

// example component that renders 2 different treemap examples
const TreemapExample = () => (
    <div className='App'>  
        <Header as='h1'>responsive treemap examples</Header>
        <hr />
        <div style={{ paddingTop: '50px' }}>
            <Header as='h2'>simple version</Header>
            <Treemap data={data1} height={150}/>
        </div>
        <div style={{ paddingTop: '50px' }}>
            <Header as='h2'>group of clusters</Header>
            <Treemap data={data2} height={300} title={true}/>
        </div>
    </div>
)

export default TreemapExample;