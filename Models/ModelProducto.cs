using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace crud_react.Models {
    public class DbProducto {
        [Key]
        public int id { get; set; }
  
        [Column(TypeName = "nvarchar(100)")]
        public string name { get; set; }
  
        [Column(TypeName = "nvarchar(16)")]
        public int price { get; set; }
  
        [Column(TypeName = "nvarchar(200)")]
        public string description { get; set; }
  
        [Column(TypeName = "nvarchar(16)")]
        public string stock { get; set; }
    }
}