using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace crud_react.Models {
    public class DbFactura {
        [Key]
        public int id { get; set; }
  
        [Column(TypeName = "nvarchar(100)")]
        public string n_factura { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string id_cliente { get; set; }
  
        [Column(TypeName = "nvarchar(16)")]
        public string id_producto { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string fecha { get; set; }
  
        [Column(TypeName = "nvarchar(16)")]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string IVA { get; set; }
    }
}