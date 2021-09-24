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
    public class DbProvedoresController: ControllerBase {

        private readonly DbTiendaContext _context;




        /**Constructor*/
        public DbProductosController(DbTiendaContext context){
            _context = context;
        }




        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbProvedor>>> GetProvedores(){
            return await _context.DbProvedores.ToListAsync();
        }




        [HttpGet("{id}")]
        public async Task<ActionResult<DbProvedor>> GetProvedor(int id){
            var provedor = await _context.DbProvedores.FindAsync(id);

            if(provedor == null){
                return NotFound();
            }

            return provedor;
        }




        [HttpPut("{id}")]
        public async Task<ActionResult> PutProvedor(int id, DbProvedor provedor){

            provedor.id = id;

            _context.Entry(provedor).State = EntityState.Modified;

            try {

                await _context.SaveChangesAsync();

            } catch(DbUpdateConcurrencyException) {

                if( !DbProvedorExists(id)){
                    return NotFound();
                }

                else {
                    throw;
                }

            }

            return NoContent();

        }




        [HttpPost]
        public async Task<ActionResult<DbProvedor>> PostProvedor(DbProvedor provedor){
            _context.DbProvedores.Add(provedor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProvedor", new { id = provedor.id }, provedor);
        }




        [HttpDelete("{id}")]
        public async Task<ActionResult<DbProvedor>> DeleteProvedor(int id){

            var provedor = await _context.DbProvedores.FindAsync(id);
            if( provedor == null ){
                return NotFound();
            }

            _context.DbProvedores.Remove(provedor);
            await _context.SaveChangesAsync();

            return provedor;    

        }




        private bool DbProductoExists(int id){
            return _context.DbProvedores.Any(e => e.id == id);
        }



    }
}