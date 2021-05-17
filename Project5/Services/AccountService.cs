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

        public AccountService(ProjectVContext context)
        {
            _context = context;
        }

        public async Task RegisterAsync(string username, string password)
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
        }
    }
}
