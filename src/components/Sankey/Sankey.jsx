import React, { useState, useEffect, useRef } from 'react';
import { Segment } from 'semantic-ui-react';
import D3Sankey from './D3Sankey';

// a pure React/JSX component that gets the component dimensions and 
// render the D3 sankey component accordingly
const Sankey = ({data, height, title}) =>  {
  const [width, setWidth] = useState(300);
  const refElement = useRef(null);

  useEffect(handleResizeEvent, []);

  useEffect(() => {
    setWidth(refElement.current.clientWidth -10);
  }, [])

  function handleResizeEvent() {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        setWidth(refElement.current.clientWidth);
      }, 50);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }

  return (
    <div className='react-world'>
      <Segment>
        {data && (
          <div ref={refElement}>
            <D3Sankey data={data} height={height} width={width} title={title} />
          </div>
        )}
      </Segment>
    </div>
  );
}

export default Sankey;