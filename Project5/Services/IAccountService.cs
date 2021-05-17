using Project5.Entities;
using System.Threading.Tasks;

namespace Project5.Services
{
    public interface IAccountService
    {
        Task RegisterAsync(string username, string password);
        Task<User> LoginAsync(string name, string password);
        Task<bool> UserExists(string name);
    }
}