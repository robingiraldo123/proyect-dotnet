using System;
using System.Collection.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Connection {
  public class BdClientesContext:DbContext {
      public BdClientesContext(DbContextOptions<BdClientesContext> option):base(options)

  }
}
