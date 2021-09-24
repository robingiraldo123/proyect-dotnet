using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_react.Models {

  

  public class DbTiendaContext:DbContext {
      public DbTiendaContext(DbContextOptions<DbTiendaContext> options):base(options){}

      public DbSet<DbCliente> DbClientes { get; set; }
      public DbSet<DbProducto> DbProductos { get; set; }

  }



  /*public class DbProductosContext:DbContext {
      public DbProductosContext(DbContextOptions<DbProductosContext> options):base(options){}

      public DbSet<DbProducto> DbProductos { get; set; }

  }*/
}
