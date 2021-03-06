using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
    public class PostController : ControllerBase
    {
        private IPostService _service;

        public PostController(IPostService service)
        {
            _service = service;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<PostDTO>>> GetAllPosts()
        {
            var posts = await _service.GetPostsAsync();
            return Ok(posts);
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<PostDTO>> GetPost(int id)
        {
            var post = await _service.GetPostAsync(id);
            return Ok(post);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<PostDTO>> AddPost(Post post)
        {
            await _service.AddPostAsync(post);
            return Created("", post);
        }

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult> DeletePost(int id)
        {
            await _service.DeletePostAsync(id);
            return Ok("Post deleted");
            //let's try it
        }

        [HttpPut]
        [AllowAnonymous]
        public async Task<ActionResult> UpdatePost(Post post)
        {
            await _service.UpdatePostAsync(post);
            return Ok("Post is up to date");
        }
    }
}
