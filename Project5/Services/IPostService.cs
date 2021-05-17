using Project5.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project5.Services
{
    public interface IPostService
    {
        Task AddPostAsync(Post user);
        Task DeletePostAsync(int id);
        Task<Post> GetPostAsync(int id);
        Task<List<Post>> GetPostsAsync();
        Task UpdatePostAsync(Post user);
    }
}