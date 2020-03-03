using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookDataService.Model
{
    public class DbContextBookData : DbContext
    {
        public DbContextBookData(DbContextOptions<DbContextBookData> options) : base(options)
        {

        }

        public DbSet<BookDataShubhi> BookDatas { get; set; }

        //protected override void onModelCreating(ModelBuilder modelBuilder)
        //{

        //    modelBuilder.Entity<BookDataShubhi>().HasData(
        //        new BookDataShubhi
        //        {
        //            ISBNNumber = 23,
        //            AuthorName = "shubhi",
        //            Publisher = "xyz",
        //            Title = "hee"

        //        }
        //      );
        //}
    }
}





