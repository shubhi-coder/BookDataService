using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookDataService.Model
{
    public class SQLBookDataServiceRepository : IBookDataRepository
    {
        private readonly DbContextBookData context;

        public SQLBookDataServiceRepository(DbContextBookData context)
        {
            this.context = context;

        }
        public BookDataShubhi Add_data(BookDataShubhi bookDataShubhi)
        {
            context.BookDatas.Add(bookDataShubhi);
            context.SaveChanges();
            return bookDataShubhi;
        }

        public BookDataShubhi Delete(int ISBNNumber)
        {
            BookDataShubhi bookDataShubhi = context.BookDatas.Find(ISBNNumber);
            if (bookDataShubhi != null)
            {
                context.BookDatas.Remove(bookDataShubhi);
                context.SaveChanges();
            }
            return bookDataShubhi;
        }

        public IEnumerable<BookDataShubhi> GetAllData()
        {
            return context.BookDatas;
        }

        public BookDataShubhi GetBookData(int ISBNNumber)
        {
            return context.BookDatas.Find(ISBNNumber);  
        }

        public BookDataShubhi Update(BookDataShubhi dataChanges)
        {
            var bookdata= context.BookDatas.Attach(dataChanges);
            bookdata.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            context.SaveChanges();
            return dataChanges;
        }
    }
}
