import { MessageSource } from '@hga/h-ui';
import React from 'react';
import '../style';

export default () => (
  <button
    onClick={() => {
      MessageSource(Date.now().toString());
    }}
  >
    Show Notification
  </button>
);
