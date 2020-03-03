using BookDataService.Controllers;
using System;
using Xunit;
using Moq;
using BookDataService.Model;
using FluentAssertions;
using System.Collections.Generic;

namespace BookDataServiceintegrationtest
{
    public class HomeControllertest
    {
        [Fact]
        public void should_add_bookdata()
        {
            //Arrange
            var listOfBookData = new List<BookDataShubhi>();

            listOfBookData.Add( new BookDataShubhi{
                ISBNNumber = 8,
                AuthorName = "M sharma",
                Title = "Goodness",
                Publisher = "Bk Dutts"
            });
            Mock<IBookDataRepository> mockRepository = new Mock<IBookDataRepository>();
            mockRepository.Setup(x => x.Add_data()).Returns(listOfBookData);
            HomeController hc = new HomeController(mockRepository.Object);
            
            //Act


            //Assert
        }
    }
}
