using Project5.DTO;
using Project5.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project5.Services
{
    public interface IUserService
    {
        Task DeleteUserAsync(int id);

        Task<UserDTO> GetUserAsync(int id);

        Task<ICollection<UserDTO>> GetUsersAsync();

        Task UpdateUserAsync(UserDTO user);
    }
}