using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using crud_react.Models;

namespace crud_react.Controllers {

    [ApiController]
    [Route("/api/[controller]")]
    public class DbProductosController: ControllerBase {

        private readonly DbTiendaContext _context;




        /**Constructor*/
        public DbProductosController(DbTiendaContext context){
            _context = context;
        }




        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbProducto>>> GetProductos(){
            return await _context.DbProductos.ToListAsync();
        }




        [HttpGet("{id}")]
        public async Task<ActionResult<DbProducto>> GetProducto(int id){
            var producto = await _context.DbProductos.FindAsync(id);

            if(producto == null){
                return NotFound();
            }

            return producto;
        }




        [HttpPut("{id}")]
        public async Task<ActionResult> PutProducto(int id, DbProducto producto){

            producto.id = id;

            _context.Entry(producto).State = EntityState.Modified;

            try {

                await _context.SaveChangesAsync();

            } catch(DbUpdateConcurrencyException) {

                if( !DbProductoExists(id)){
                    return NotFound();
                }

                else {
                    throw;
                }

            }

            return NoContent();

        }




        [HttpPost]
        public async Task<ActionResult<DbProducto>> PostProducto(DbProducto producto){
            _context.DbProductos.Add(producto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProducto", new { id = producto.id }, producto);
        }




        [HttpDelete("{id}")]
        public async Task<ActionResult<DbProducto>> DeleteProducto(int id){

            var producto = await _context.DbProductos.FindAsync(id);
            if( producto == null ){
                return NotFound();
            }

            _context.DbProductos.Remove(producto);
            await _context.SaveChangesAsync();

            return producto;    

        }




        private bool DbProductoExists(int id){
            return _context.DbProductos.Any(e => e.id == id);
        }



    }
}