using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookDataService.Model
{
    public class BookDataShubhi
    {
        [Required]
        [Key]
        public int ISBNNumber { get; set; }
        public string AuthorName { get; set; }
        public string Title { get; set; }
        public string Publisher { get; set; }
    }
}
