using System;
using System.Collections.Generic;

namespace glossiq_test.Models
{
    public interface IClientRepository
    {
        IEnumerable<ClientModel> GetAll();

        ClientModel Add(ClientModel client);
    }
}