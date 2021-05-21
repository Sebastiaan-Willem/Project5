﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Entities
{
    public class Photo
    {
        public int Id { get; set; }
        public string ImgUrl { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public bool IsProfilePicture { get; set; }
    }
}
