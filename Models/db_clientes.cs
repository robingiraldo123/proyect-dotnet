using System;
using System.Collection.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Connection {
  public class BdClientes {
      [key]
      public int id { get; set; }

      public string name { get; set; }

      public string email { get; set; }

      public string phone_number { get; set; }
  }
}