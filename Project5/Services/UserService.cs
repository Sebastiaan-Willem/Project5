using AutoMapper;
using Project5.DTO;
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
        private IMapper _mapper;

        public UserService(IUserRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<ICollection<UserDTO>> GetUsersAsync()
        {
            List<User> users = await _repo.GetUsersAsync();
            List<UserDTO> usersDTO = _mapper.Map<List<UserDTO>>(users);
            return usersDTO;
        }

        public async Task<UserDTO> GetUserAsync(int id)
        {
            User user = await _repo.GetUserAsync(id);
            UserDTO userDTO = _mapper.Map<UserDTO>(user);
            return userDTO;
        }

        public async Task DeleteUserAsync(int id)
        {
            await _repo.DeleteUserAsync(id);
        }

        public async Task UpdateUserAsync(UserDTO userDTO)
        {
            try
            {
                var user = _mapper.Map<User>(userDTO);
                await _repo.UpdateUserValues(user);
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}