import React from 'react';

export default function PageInternalError() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <b style={{ fontSize: 50, marginBottom: 0 }}>Uh Oh!</b>
      <b style={{ fontSize: 30 }}>Page Internal Error | Someting went wrong</b>
    </div>
  );
}
