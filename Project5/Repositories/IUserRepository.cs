using Project5.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project5.Repositories
{
    public interface IUserRepository
    {
        Task DeleteUserAsync(int id);
        Task<User> GetUserAsync(int id);
        Task<List<User>> GetUsersAsync();
        Task UpdateUserAsync(User user);
    }
}