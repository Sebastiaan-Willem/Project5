using Project5.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project5.Repositories
{
    public interface IPostRepository
    {
        Task AddPostAsync(Post post);
        Task DeletePostAsync(int id);
        Task<Post> GetPostAsync(int id);
        Task<List<Post>> GetPostsAsync();
        Task UpdatePostAsync(Post post);
    }
}