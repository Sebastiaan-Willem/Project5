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
    public class PostService : IPostService
    {
        private IPostRepository _repo;
        private IMapper _mapper;

        public PostService(IPostRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<List<PostDTO>> GetPostsAsync()
        {
            List<Post> posts = await _repo.GetPostsAsync();
            List<PostDTO> postsDTO = _mapper.Map<List<PostDTO>>(posts);

            return postsDTO;
        }

        public async Task<PostDTO> GetPostAsync(int id)
        {
            Post post = await _repo.GetPostAsync(id);
            PostDTO postDTO = _mapper.Map<PostDTO>(post);

            return postDTO;
        }

        public async Task AddPostAsync(Post user)
        {
            await _repo.AddPostAsync(user);
        }

        public async Task DeletePostAsync(int id)
        {

            await _repo.DeletePostAsync(id);
        }

        public async Task UpdatePostAsync(Post user)
        {
            await _repo.UpdatePostAsync(user);
        }
    }
}
