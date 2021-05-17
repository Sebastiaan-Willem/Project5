using Project5.Entities;
using Project5.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Services
{
    public class PostService : IPostService
    {
        private IPostRepository _repo;

        public PostService(IPostRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<Post>> GetPostsAsync()
        {
            return await _repo.GetPostsAsync();
        }

        public async Task<Post> GetPostAsync(int id)
        {
            return await _repo.GetPostAsync(id);
        }

        public async Task AddPostAsync(Post user)
        {
            await _repo.AddPostAsync(user);
        }

        public async Task DeletePostAsync(int id)
        {

            await _repo.DeletePostAsync(id);
        }

        public async Task UpdatePostAsync(Post user)
        {
            await _repo.UpdatePostAsync(user);
        }
    }
}
