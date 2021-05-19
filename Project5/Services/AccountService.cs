using Microsoft.EntityFrameworkCore;
using Project5.DTO;
using Project5.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Project5.Services
{
    public class AccountService : IAccountService
    {
        private ProjectVContext _context;
        private ITokenService _tokenService;

        public AccountService(ProjectVContext context, ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        public async Task<UserTokenDTO> RegisterAsync(string username, string password)
        {
            using var hmac = new HMACSHA512();

            var user = new User
            {
                Name = username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
                PasswordSalt = hmac.Key,
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new UserTokenDTO
            {
                Name = user.Name,
                Token = _tokenService.CreateToken(user)
            };
        }

        public async Task<UserTokenDTO> LoginAsync(string name, string password)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.Name == name);

            if (user == null)
            {
                throw new UnauthorizedAccessException("Invalid Username/Password");
            }

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

            for (int i = 0; i < hash.Length; i++)
            {
                if (hash[i] != user.PasswordHash[i])
                {
                    throw new UnauthorizedAccessException("Invalid Username/Password");
                }
            }

            return new UserTokenDTO
            {
                Id = user.Id,
                Name = user.Name,
                Token = _tokenService.CreateToken(user)
            };
        }

        public async Task<bool> UserExists(string name)
        {
            return await _context.Users.AnyAsync(x => x.Name == name.ToLower());
        }
    }
}
