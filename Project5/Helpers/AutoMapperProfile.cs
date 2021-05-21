using AutoMapper;
using Project5.DTO;
using Project5.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Helpers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDTO>().ForMember(
                dest => dest.ProfilePicture, 
                options => options.MapFrom(
                src => src.Photos.FirstOrDefault(x => x.IsProfilePicture).ImgUrl));
            
            CreateMap<Post, PostDTO>();
            CreateMap<Language, LanguageDTO>();
            CreateMap<Photo, PhotoDTO>();
        }
    }
}
