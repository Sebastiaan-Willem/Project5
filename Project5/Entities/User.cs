using Project5.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Entities
{
    public class User
    {
        public int Id { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }
        public string ProfilePicture { get; set; }
        [MaxLength(50)]
        public string City { get; set; }
        [MaxLength(50)]
        public string Country { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime LastModified { get; set; } = DateTime.Now;
        public bool IsVerified { get; set; }
        public ICollection<Language> Languages { get; set; }
        public ICollection<Post> Posts { get; set; }
    }
}
