import React from 'react';

export const DisplayClients = ({ numberOfClients, getAllClients }) => {
  return (
    <div
      style={{
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className='display-board'
    >
      <h4 style={{ color: 'white', textAlign: 'center' }}>Clients Created</h4>
      <div
        style={{
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 25,
        }}
      >
        {numberOfClients}
      </div>
    </div>
  );
};
