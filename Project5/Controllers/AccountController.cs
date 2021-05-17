using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project5.DTO;
using Project5.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAccountService _service;

        public AccountController(IAccountService service)
        {
            _service = service;
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(RegisterDTO dto)
        {
            //if()
            //{

            //}
            await _service.RegisterAsync(dto.Name, dto.Password);

            return Created("", null);
        }

    }
}
