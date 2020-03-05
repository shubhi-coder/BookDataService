using System;
using Xunit;
using Moq;
using System.Collections.Generic;
using BookDataService.Model;
using BookDataService.Controllers;
using System.Linq;
using FluentAssertions;

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
            mockRepository.Setup(x => x.GetAllData()).Returns(listOfBookData);
            var homeController = new HomeController(mockRepository.Object);
            homeController.Should().NotBeNull();

            //assert
            Assert.Equal(mockRepository.Object.GetAllData(), listOfBookData);

        }

        [Fact]
        public void should_add_bookdata()
        {
            //arrange           
            BookDataShubhi bs = new BookDataShubhi
            {
                ISBNNumber = 3,
                AuthorName="Shubhi",
                Publisher="Penguins",
                Title="Blossoms"
            };
            Mock<IBookDataRepository> mockRepository = new Mock<IBookDataRepository>();
          
            //act
            mockRepository.Setup(x => x.Add_data(bs)).Returns(bs);
            var homeController = new HomeController(mockRepository.Object);

            //assert
            Assert.Equal(mockRepository.Object.Add_data(bs),bs);
        }

        [Fact]
        public void should_search_bookdata_by_title()
        {
            //arrange
            var listOfBookData = new List<BookDataShubhi>();
           
            listOfBookData.Add(new BookDataShubhi
            {
                ISBNNumber = 6,
                AuthorName = "Gumnaam",
                Publisher = "AnandPress",
                Title = "Darkside"
            });

            Mock<IBookDataRepository> mockRepository = new Mock<IBookDataRepository>();
            //act
            mockRepository.Setup(x => x.GetBookData("Darkside")).Returns(listOfBookData);

            //assert
            Assert.Equal("Darkside",listOfBookData.First().Title);
        }
    }
}
