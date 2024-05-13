import { Search } from '@hga/h-ui';
import React, { useState } from 'react';
import '../style';

export default () => {
  const [value, setValue] = useState('');
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const onSearch = (e: any) => {
    console.log(e, 'onSearch');
  };
  console.log('render...');
  return <Search value={value} onChange={onChange} suffix={'😈'} onSearch={onSearch} />;
};
