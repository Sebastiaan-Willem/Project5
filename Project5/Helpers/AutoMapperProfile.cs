using AutoMapper;
using Project5.DTO;
using Project5.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDTO>().ForMember(
                dest => dest.ProfilePicture,
                options => options.MapFrom(
                src => src.Photos.FirstOrDefault(x => x.IsProfilePicture).ImgUrl))
                .ReverseMap();
            //.ForMember(x => x.Photos, y => y.Ignore())
            //.ForMember(x => x.Languages, y => y.Ignore());

            CreateMap<Post, PostDTO>().ReverseMap();
            CreateMap<Language, LanguageDTO>().ReverseMap();
            CreateMap<Photo, PhotoDTO>().ReverseMap();
        }
    }
}