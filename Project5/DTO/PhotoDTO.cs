using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.DTO
{
    public class PhotoDTO
    {
        public int Id { get; set; }
        public string ImgUrl { get; set; }
        public bool IsProfilePicture { get; set; }
    }
}
