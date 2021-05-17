using Microsoft.EntityFrameworkCore;
using Project5.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Repositories
{
    public class UserRepository : IUserRepository
    {
        private ProjectVContext _context;

        public UserRepository(ProjectVContext context)
        {
            _context = context;
        }

        public async Task<List<User>> GetUsersAsync()
        {
            return await _context.Users
                                 .Include(x => x.Posts)
                                 .ToListAsync();
        }

        public async Task<User> GetUserAsync(int id)
        {
            return await _context.Users
                                 .Include(x => x.Posts)
                                 .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task AddUserAsync(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUserAsync(int id)
        {

            User user = new User
            {
                Id = id
            };
            _context.Users.Attach(user);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateUserAsync(User user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }
    }
}
