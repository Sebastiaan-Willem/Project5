using Project5.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project5.Services
{
    public interface IUserService
    {
        Task DeleteUserAsync(int id);
        Task<User> GetUserAsync(int id);
        Task<List<User>> GetUsersAsync();
        Task UpdateUserAsync(User user);
    }
}