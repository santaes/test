using System;
using System.Collections.Generic;

namespace glossiq_test.Models
{
    public class ClientRepository : IClientRepository
    {
        private List<ClientModel> clients = new List<ClientModel>();
        private int _nextId = 1;
        public ClientRepository()
        {
            Add(new ClientModel { service = "haircut1", firstName = "first1", lastName = "last1", email = "email1@gmail.com" });
            Add(new ClientModel { service = "haircut2", firstName = "first2", lastName = "last2", email = "email2@gmail.com" });
            Add(new ClientModel { service = "haircut3", firstName = "first3", lastName = "last3", email = "email3@gmail.com" });
        }

        public IEnumerable<ClientModel> GetAll()
        {
            return clients;
        }

        public ClientModel Add(ClientModel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            clients.Add(item);
            return item;
        }
    }
}