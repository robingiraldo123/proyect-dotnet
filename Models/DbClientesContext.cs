using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_react.Models {
  public class DbClientesContext:DbContext {
      public DbClientesContext(DbContextOptions<DbClientesContext> options):base(options){}

      public DbSet<DbCliente> DbClientes { get; set; }

  }
}
