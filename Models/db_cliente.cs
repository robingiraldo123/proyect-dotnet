using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace DbConnection.Models {
  public class DbCliente {
      [Key]
      public int id { get; set; }

      [Column(TypeName = "nvarchar(100)")]
      public string name { get; set; }

      [Column(TypeName = "nvarchar(100)")]
      public string email { get; set; }

      [Column(TypeName = "nvarchar(16)")]
      public string phone_number { get; set; }
  }
}
