using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Entities
{
    public class Language
    {
        public int Id { get; set; }

        [MaxLength(20)]
        public string Name { get; set; }

        //user ID as FK
        public int UserId { get; set; }
        public ICollection<User> Users { get; set; }

        public Language(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
