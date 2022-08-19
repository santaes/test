export const getAllClients = async () => {
  const response = await fetch('/api/clients');
  return response.json();
};

export const createClient = async (data) => {
  const response = await fetch(`/api/client`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
};
