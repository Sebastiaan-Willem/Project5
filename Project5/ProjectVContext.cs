using Microsoft.EntityFrameworkCore;
using Project5.Entities;
using Project5.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project5
{
    public class ProjectVContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }

        public ProjectVContext(DbContextOptions options):base(options)
        {

        }
    }
}
