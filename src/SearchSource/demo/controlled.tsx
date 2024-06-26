import { SearchSource } from '@hga/h-ui';
import React, { useState } from 'react';
import '../style';

export default () => {
  const [value, setValue] = useState('');
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  console.log('render...');
  return <SearchSource value={value} onChange={onChange} suffix={'😈'} />;
};
