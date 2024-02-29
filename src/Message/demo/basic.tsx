import { Message } from '@hga/h-ui';
import React from 'react';
import '../style';

export default () => (
  <button
    onClick={() => {
      Message(Date.now().toString());
    }}
  >
    Show Notification
  </button>
);
