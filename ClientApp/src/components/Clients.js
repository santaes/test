import React from 'react';

export const Clients = ({ clients, numberOfClients }) => {
  console.log('clients length:', numberOfClients);
  if (clients.length === 0) return null;

  const ClientRow = (client, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
        <td>{index + 1}</td>
        <td>{client.firstName}</td>
        <td>{client.lastName}</td>
        <td>{client.email}</td>
      </tr>
    );
  };

  const clientTable = clients.map((client, index) => ClientRow(client, index));

  return (
    <div className='container'>
      <h2>Clients</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Service</th>
            <th>client Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{clientTable}</tbody>
      </table>
    </div>
  );
};
