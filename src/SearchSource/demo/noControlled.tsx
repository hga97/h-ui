import { Search } from '@hga/h-ui';
import React from 'react';
import '../style';

export default () => {
  const onSearch = (e: any) => {
    console.log(e, 'onSearch');
  };
  console.log('只render一次');
  return <Search onSearch={onSearch} />;
};
