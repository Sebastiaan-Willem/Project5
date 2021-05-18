using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5.Entities
{
    public class Language
    {
        public int LanguageId { get; set; }
        public string Name { get; set; }
        public List<User> Users { get; set; }


    }
}
