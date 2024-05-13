import { Search } from '@hga/h-ui';
import React, { useEffect, useRef } from 'react';
import '../style';

export default () => {
  const sRef = useRef(null);
  useEffect(() => {
    console.log(sRef);
  }, []);
  return <Search className="search-small" ref={sRef} />;
};
