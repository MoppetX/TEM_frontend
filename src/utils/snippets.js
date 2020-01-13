import React from 'react';

export const DebugDump = props => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
  </pre>
  );
};

