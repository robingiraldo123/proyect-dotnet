using System;
using Microsoft.EntityFrameworkCore;
using Microsift.AspNetCore.Http;
using Microsift.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DbConnection.Models;

namespace DbConnection.Models {
    [Route("api/[controller]")]
    [ApiController]
    public class DbClientesController: ControllerBase {
        private readonly DbClientesContext _context;

        public BdClientesController(BdClientesContext context){
            _context = context;
        }




        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbCliente>>> GetCliente(){
            return await _context.DbClientes.ToListAsync();
        }




        [HttpGet("{id}")]
        public async Task<ActionResult<DbCliente>> GetCliente(){
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

            CreatedAtAction("GetCliente", new { id = cliente.id }, cliente);
        }




        [HttpDelete("{id}")]
        public async Task<ActionResult<DbCliente>> DeleteCliente(int id){

            var cliente = await _context.DbClientes.FindAsync(id);
            if( cliente == null){
                return NotFound();
            }

            _context.DbClientes.Remove(cliente);
            await _context-SaveChangesAsync();

            return cliente;    

        }




        private bool DbClienteExists(int id){
            return _context.DbClientes.Any(e => e.id == id);
        }

    }
}