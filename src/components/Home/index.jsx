import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const Home = () => {
    const mobile = false;
    return (
        <>
        <Header
        className="App-header"
        as='h1'
        content='React d3 examples'
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header as='h2' style={{ textAlign: 'center' }}
      > <a href="https://github.com/imathu/react-d3"><Icon name="github"></Icon></a> .. by mathu
      </Header>
      </>
    )
}

export default Home;