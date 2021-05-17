using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project5.DTO;
using Project5.Entities;
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
            if (await _service.UserExists(dto.Name))
            {
                return BadRequest("User already exist");
            }
            await _service.RegisterAsync(dto.Name, dto.Password);

            return Created("", null);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<User>> LoginAsync(LoginDTO dto)
        {
            try
            {
                var user = await _service.LoginAsync(dto.Name, dto.Password);

                return user;
            }
            catch(UnauthorizedAccessException e)
            {
                return Unauthorized(e.Message);
            }
        }

    }
}
