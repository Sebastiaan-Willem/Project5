using System.Threading.Tasks;

namespace Project5.Services
{
    public interface IAccountService
    {
        Task RegisterAsync(string username, string password);
    }
}