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
        public DbSet<Language> Languages { get; set; }

        public ProjectVContext(DbContextOptions options):base(options)
        {
            //Seed db with languages
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);

            SeedData(modelBuilder);
        }

        private void SeedData(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Language>().HasData(
                new Language(1,"C#"),
                new Language(2,"C++"),
                new Language(3,"Java"),
                new Language(4,"Javascript"),
                new Language(5,"Python"),
                new Language(6,"Swift"),
                new Language(7,"HTML"),
                new Language(8,"CSS"),
                new Language(9,"Typescript"),
                new Language(10,"React"),
                new Language(11,"SQL"),
                new Language(12,"XML"));             

        }
    }
}
