import React from 'react';
import Treemap from './Treemap';

import { Header } from 'semantic-ui-react';
import { data2, data1 } from './data';


const TreemapExample = () => (
    <>
        <div className="App">
            <Header as='h2'>simple version</Header>
            <Treemap data={data1} height={150}/>
        </div>
        <div className="App">
            <Header as='h2'>with group title</Header>
            <Treemap data={data2} height={300} title={true}/>
        </div>
    </>
)

export default TreemapExample;