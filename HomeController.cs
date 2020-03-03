using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookDataService.Model;
using System.Net;

namespace BookDataService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        //constructor injection

      private  readonly IBookDataRepository _bookdatarepository;

        public HomeController(IBookDataRepository bookdatarepository)
        {
            _bookdatarepository = bookdatarepository; 

        }

   [HttpPost]
        // POST api/values
        public string post_Data([FromBody]BookDataShubhi bk)
        {
            BookDataShubhi bd = _bookdatarepository.Add_data(bk);
            return "saved";
            

        }
        //public int Index()
        //{
        //    return _bookdatarepository.GetBookData(1).ISBNNumber;
        //}
        //public ViewResult Details()
        //{
        //    BookDataShubhi model = _bookdatarepository.GetBookData(1);
            
        //    ViewBag.PageTitle = "Book Details";
        //    return View(model);
        //}
       
    }
}
