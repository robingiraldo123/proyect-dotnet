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
    public class DbProveedoresController: ControllerBase {

        private readonly DbTiendaContext _context;




        /**Constructor*/
        public DbProveedoresController(DbTiendaContext context){
            _context = context;
        }




        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbProveedor>>> GetProveedores(){
            return await _context.DbProveedores.ToListAsync();
        }




        [HttpGet("{id}")]
        public async Task<ActionResult<DbProveedor>> GetProveedor(int id){
            var proveedor = await _context.DbProveedores.FindAsync(id);

            if(proveedor == null){
                return NotFound();
            }

            return proveedor;
        }




        [HttpPut("{id}")]
        public async Task<ActionResult> PutProveedor(int id, DbProveedor proveedor){

            proveedor.id = id;

            _context.Entry(proveedor).State = EntityState.Modified;

            try {

                await _context.SaveChangesAsync();

            } catch(DbUpdateConcurrencyException) {

                if( !DbProveedorExists(id)){
                    return NotFound();
                }

                else {
                    throw;
                }

            }

            return NoContent();

        }




        [HttpPost]
        public async Task<ActionResult<DbProveedor>> PostProveedor(DbProveedor proveedor){
            _context.DbProveedores.Add(proveedor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProveedor", new { id = proveedor.id }, proveedor);
        }




        [HttpDelete("{id}")]
        public async Task<ActionResult<DbProveedor>> DeleteProveedor(int id){

            var proveedor = await _context.DbProveedores.FindAsync(id);
            if( proveedor == null ){
                return NotFound();
            }

            _context.DbProveedores.Remove(proveedor);
            await _context.SaveChangesAsync();

            return proveedor;    

        }




        private bool DbProveedorExists(int id){
            return _context.DbProveedores.Any(e => e.id == id);
        }



    }
}