using Project5.Entities;
using Project5.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Services
{
    public class UserService : IUserService
    {
        private IUserRepository _repo;

        public UserService(IUserRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<User>> GetUsersAsync()
        {
            return await _repo.GetUsersAsync();
        }

        public async Task<User> GetUserAsync(int id)
        {
            return await _repo.GetUserAsync(id);
        }

        public async Task AddUserAsync(User user)
        {
            await _repo.AddUserAsync(user);
        }

        public async Task DeleteUserAsync(int id)
        {

            await _repo.DeleteUserAsync(id);
        }

        public async Task UpdateUserAsync(User user)
        {
            await _repo.UpdateUserAsync(user);
        }
    }
}
