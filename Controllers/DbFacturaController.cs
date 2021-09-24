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
    public class DbFacturasController: ControllerBase {

        private readonly DbTiendaContext _context;




        /**Constructor*/
        public DbFacturasController(DbTiendaContext context){
            _context = context;
        }




        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbFactura>>> GetFacturas(){
            return await _context.DbFacturas.ToListAsync();
        }




        [HttpGet("{id}")]
        public async Task<ActionResult<DbFactura>> GetFactura(int id){
            var factura = await _context.DbFacturas.FindAsync(id);

            if(factura == null){
                return NotFound();
            }

            return factura;
        }




        [HttpPut("{id}")]
        public async Task<ActionResult> PutFactura(int id, DbFactura factura){

            factura.id = id;

            _context.Entry(factura).State = EntityState.Modified;

            try {

                await _context.SaveChangesAsync();

            } catch(DbUpdateConcurrencyException) {

                if( !DbFacturaExists(id)){
                    return NotFound();
                }

                else {
                    throw;
                }

            }

            return NoContent();

        }




        [HttpPost]
        public async Task<ActionResult<DbFactura>> PostFactura(DbFactura factura){
            _context.DbFacturas.Add(factura);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFactura", new { id = factura.id }, factura);
        }




        [HttpDelete("{id}")]
        public async Task<ActionResult<DbFactura>> DeleteFactura(int id){

            var factura = await _context.DbFacturas.FindAsync(id);
            if( factura == null){
                return NotFound();
            }

            _context.DbFacturas.Remove(factura);
            await _context.SaveChangesAsync();

            return factura;    

        }




        private bool DbFacturaExists(int id){
            return _context.DbFacturas.Any(e => e.id == id);
        }

    }
}