using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookDataService.Model
{
    public interface IBookDataRepository
    {
        BookDataShubhi GetBookData(int ISBNNumber);
        IEnumerable<BookDataShubhi> GetAllData();
        BookDataShubhi Add_data(BookDataShubhi bookDataShubhi);
        BookDataShubhi Update(BookDataShubhi dataChanges);
        BookDataShubhi Delete(int ISBNNumber);
        //BookDataShubhi AddBookData();
        //BookDataShubhi SearchBookData();
    }
}
