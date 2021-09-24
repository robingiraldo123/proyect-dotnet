using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace crud_react.Models {
    public class DbProveedor {
        [Key]
        public int id { get; set; }
  
        [Column(TypeName = "nvarchar(100)")]
        public string name { get; set; }
  
        [Column(TypeName = "nvarchar(30)")]
        public string ramo { get; set; }
  
        [Column(TypeName = "nvarchar(300)")]
        public string description { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string frecuencia { get; set; }
  
        [Column(TypeName = "nvarchar(30)")]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string persona_contacto { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string phone_number { get; set; }

        [Column(TypeName = "nvarchar(200)")]
        public string direccion { get; set; }
    }
}