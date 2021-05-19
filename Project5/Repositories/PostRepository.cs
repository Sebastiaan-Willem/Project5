using Microsoft.EntityFrameworkCore;
using Project5.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Repositories
{
    public class PostRepository : IPostRepository
    {
        private ProjectVContext _context;

        public PostRepository(ProjectVContext context)
        {
            _context = context;
        }
        public async Task<List<Post>> GetPostsAsync()
        {
            return await _context.Posts
                                 .Include(x => x.User)
                                 .ToListAsync();
        }

        public async Task<Post> GetPostAsync(int id)
        {
            return await _context.Posts
                                 .Include(x => x.User)
                                 .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task AddPostAsync(Post post)
        {
            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();
        }

        public async Task DeletePostAsync(int id)
        {

            Post post = new Post
            {
                Id = id
            };
            _context.Posts.Attach(post);
            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();
        }

        public async Task UpdatePostAsync(Post post)
        {
            _context.Posts.Update(post);
            await _context.SaveChangesAsync();
        }

    }
}
