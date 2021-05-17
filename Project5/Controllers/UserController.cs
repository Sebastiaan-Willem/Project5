using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class UserController : ControllerBase
    {
        private IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            var users = await _service.GetUsersAsync();
            return Ok(users);
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _service.GetUserAsync(id);
            return Ok(user);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteUser(int id)
        {
            await _service.DeleteUserAsync(id);
            return Ok("User deleted");            
        }

        [HttpPut]
        public async Task<ActionResult> UpdateUser(User user)
        {
            await _service.UpdateUserAsync(user);
            return Ok("User is up to date"); 
        }
    }
}
