using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookDataService.Model
{
    public class MockBookDataServiceRepository : IBookDataRepository
    {
        private List<BookDataShubhi> _bookdatalist;

        public MockBookDataServiceRepository()
        {
            _bookdatalist = new List<BookDataShubhi>()
            {
                new BookDataShubhi() {ISBNNumber=1, AuthorName="xyz", Title="goodness", Publisher="Penguins" }
        };


        }

        public BookDataShubhi Add_data(BookDataShubhi bookDataShubhi)
        {
            bookDataShubhi.ISBNNumber = _bookdatalist.Max(e => e.ISBNNumber) + 1;//finds the max isbn number and adds it by 1 to make it the new isbn id
            _bookdatalist.Add(bookDataShubhi);
            return bookDataShubhi;
        }

        public BookDataShubhi Delete(int ISBNNumber)
        {
            BookDataShubhi bookDataShubhi = _bookdatalist.FirstOrDefault(e => e.ISBNNumber==ISBNNumber);
            if (bookDataShubhi != null)
            {
                _bookdatalist.Remove(bookDataShubhi);
            }
            return bookDataShubhi;//return the deleted data
        }

        public IEnumerable<BookDataShubhi> GetAllData()
        {
            return _bookdatalist;
        }

        public BookDataShubhi GetBookData(int ISBNNumber)
        {
            return this._bookdatalist.FirstOrDefault(e => e.ISBNNumber == ISBNNumber);
        }

        public BookDataShubhi Update(BookDataShubhi dataChanges)
        {
            BookDataShubhi bookDataShubhi = _bookdatalist.FirstOrDefault(e => e.ISBNNumber == dataChanges.ISBNNumber);
            if (bookDataShubhi != null)
            {
                bookDataShubhi.AuthorName = dataChanges.AuthorName;
                bookDataShubhi.Publisher = dataChanges.Publisher;
                bookDataShubhi.Title = dataChanges.Title;
            }
            return bookDataShubhi;
        }
    }
}
