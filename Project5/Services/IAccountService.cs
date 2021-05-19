using Project5.DTO;
using Project5.Entities;
using System.Threading.Tasks;

namespace Project5.Services
{
    public interface IAccountService
    {
        Task<UserTokenDTO> RegisterAsync(string username, string password);
        Task<UserTokenDTO> LoginAsync(string name, string password);
        Task<bool> UserExists(string name);
    }
}