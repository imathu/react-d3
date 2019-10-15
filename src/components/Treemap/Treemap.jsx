import React, { useState, useEffect, useRef } from 'react';
import { Segment } from 'semantic-ui-react';
import D3Treemap from './D3Treemap';

const Treemap = ({data, height, title}) =>  {
  const [width, setWidth] = useState(300);
  const refElement = useRef(null);

  useEffect(handleResizeEvent, []);

  useEffect(() => {
    setWidth(refElement.current.clientWidth);
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
            <D3Treemap data={data} height={height} width={width} title={title} />
          </div>
        )}
      </Segment>
    </div>
  );
}

export default Treemap;