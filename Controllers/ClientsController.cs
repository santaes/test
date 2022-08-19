using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace glossiq_test.Controllers
{
    [ApiController]
    public class ClientsController : ControllerBase
    {

        private readonly ILogger<ClientsController> _logger;

        static readonly Models.IClientRepository repository = new Models.ClientRepository();

        public ClientsController(ILogger<ClientsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/clients")]
        public IEnumerable<Models.ClientModel> GetAllClients()
        {
            return repository.GetAll();
        }

        [HttpPost]
        [Route("api/client")]
        [Consumes("application/json")]
        public Models.ClientModel PostClient(Models.ClientModel item)
        {
            return repository.Add(item);
        }


    }
}