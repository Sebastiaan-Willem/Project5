using Project5.Entities;

namespace Project5.Services
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}