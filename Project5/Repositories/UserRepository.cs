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
            var users = await _context.Users
                                 .Include(x => x.Posts)
                                 .Include(x => x.Languages)
                                 .Include(x => x.Photos)
                                 .ToListAsync();
            return users;
        }

        public async Task<User> GetUserAsync(int id)
        {
            return await _context.Users
                                 .Include(x => x.Posts)
                                 .Include(x => x.Languages)
                                 .Include(x => x.Photos)
                                 .FirstOrDefaultAsync(x => x.Id == id);
        }

        //public async Task AddUserAsync(User user)
        //{
        //    await _context.Users.AddAsync(user);
        //    await _context.SaveChangesAsync();
        //}

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

        public async Task UpdateUserValues(User user)
        {
            _context.Users.Attach(user);
            _context.Entry(user).Property(x => x.Name).IsModified = true;
            _context.Entry(user).Property(x => x.Country).IsModified = true;
            _context.Entry(user).Property(x => x.City).IsModified = true;
            _context.Entry(user).Property(x => x.Languages).IsModified = true;
            _context.Entry(user).Property(x => x.ProfilePicture).IsModified = true;

            await _context.SaveChangesAsync();
        }
    }
}