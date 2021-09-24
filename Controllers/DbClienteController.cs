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
    public class DbClientesController: ControllerBase {

        private readonly DbTiendaContext _context;




        /**Constructor*/
        public DbClientesController(DbTiendaContext context){
            _context = context;
        }




        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbCliente>>> GetClientes(){
            return await _context.DbClientes.ToListAsync();
        }




        [HttpGet("{id}")]
        public async Task<ActionResult<DbCliente>> GetCliente(int id){
            var cliente = await _context.DbClientes.FindAsync(id);

            if(cliente == null){
                return NotFound();
            }

            return cliente;
        }




        [HttpPut("{id}")]
        public async Task<ActionResult> PutCliente(int id, DbCliente cliente){

            cliente.id = id;

            _context.Entry(cliente).State = EntityState.Modified;

            try {

                await _context.SaveChangesAsync();

            } catch(DbUpdateConcurrencyException) {

                if( !DbClienteExists(id)){
                    return NotFound();
                }

                else {
                    throw;
                }

            }

            return NoContent();

        }




        [HttpPost]
        public async Task<ActionResult<DbCliente>> PostCliente(DbCliente cliente){
            _context.DbClientes.Add(cliente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCliente", new { id = cliente.id }, cliente);
        }




        [HttpDelete("{id}")]
        public async Task<ActionResult<DbCliente>> DeleteCliente(int id){

            var cliente = await _context.DbClientes.FindAsync(id);
            if( cliente == null){
                return NotFound();
            }

            _context.DbClientes.Remove(cliente);
            await _context.SaveChangesAsync();

            return cliente;    

        }




        private bool DbClienteExists(int id){
            return _context.DbClientes.Any(e => e.id == id);
        }

    }
}