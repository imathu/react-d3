import React, { useState, useEffect, useRef } from 'react';
import { Segment } from 'semantic-ui-react';
import D3Treemap from './D3Treemap';

const Treemap = ({data, height, title}) =>  {
  const [width, setWidth] = useState(300);
  const [active, setActive] = useState(null);
  const refElement = useRef(null);
  const [vis, setVis] = useState(null); 

  useEffect(handleResizeEvent, []);
  useEffect(initVis, [ data ]);
  useEffect(updateVisOnResize, [ width, height ]);

  useEffect(() => {
    setWidth(refElement.current.clientWidth);
  }, [])

  function handleResizeEvent() {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        setWidth(refElement.current.clientWidth);
      }, 300);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }

  function initVis() {
    if(data) {
      const d3Props = {
        data,
        width,
        height,
        onDatapointClick: setActive
      };
      setVis(new D3Treemap(refElement.current, d3Props, title));
    }
  }

  function updateVisOnResize() {
    vis && vis.resize(width, height);
  }

  return (
    <div className='react-world'>
      <Segment>
        <div>{active}</div>
        <div ref={refElement}/>
      </Segment>
    </div>
  );
}

export default Treemap;