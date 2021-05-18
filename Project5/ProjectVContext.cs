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

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
           .Entity<User>()
           .Property(e => e.LanguageIds)
           .HasConversion<int>();

            modelBuilder
                .Entity<Language>()
                .Property(e => e.LanguageId)
                .HasConversion<int>();

            modelBuilder
            .Entity<Language>().HasData(
                Enum.GetValues(typeof(LanguageId))
                    .Cast<LanguageId>()
                    .Select(e => new Language()
                    {
                        LanguageId = (int)e,
                        Name = e.ToString()
                    })
            );


            //modelBuilder
            //    .Entity<User>()
            //    .Property(e => e.Language)
            //    .HasConversion(
            //        v => v.ToString(),
            //        v => (Languages)Enum.Parse(typeof(Languages), v));
        }
    }
}
