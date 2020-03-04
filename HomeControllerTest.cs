using System;
using Xunit;
using Moq;
using System.Collections.Generic;
using BookDataService.Model;
using BookDataService.Controllers;
using System.Linq;

namespace BookDataServiceunittest1
{
    public class HomeControllerTest
    {
        [Fact]
        public void should_getall_bookdata()
        {
            //arrange
            var listOfBookData = new List<BookDataShubhi>();
            Mock<IBookDataRepository> mockRepository = new Mock<IBookDataRepository>();
            listOfBookData.Add(new BookDataShubhi
            {
                ISBNNumber = 34,
                AuthorName = "M Sharma",
                Publisher = "PG House",
                Title = "Goodness"
            });

            //act
            var data = mockRepository.Setup(x => x.GetAllData()).Returns(listOfBookData).ToString();
            HomeController hc = new HomeController(mockRepository.Object);


            ////assert
            //Assert.Equal("Goodness",);
        }
    }
}
