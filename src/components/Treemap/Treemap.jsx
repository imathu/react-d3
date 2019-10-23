import React, { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { Segment } from 'semantic-ui-react';
import D3Treemap from './D3Treemap';

// a pure React/JSX component that gets the component dimensions and
// render the D3Treemap component accordingly
const Treemap = ({ data, height, title }) => {
  const [width, setWidth] = useState(300);
  const refElement = useRef(null);

  useEffect(() => {
    setWidth(refElement.current.clientWidth);
  }, []);

  function handleResizeEvent() {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWidth(refElement.current.clientWidth);
      }, 50);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }

  useEffect(handleResizeEvent, []);

  return (
    <div className="react-world">
      <Segment>
        {data && (
          <div ref={refElement}>
            <D3Treemap data={data} height={height} width={width} title={title} />
          </div>
        )}
      </Segment>
    </div>
  );
};
Treemap.propTypes = {
  data: PropTypes.shape({}).isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.bool,
};
Treemap.defaultProps = {
  title: false,
};

export default Treemap;
