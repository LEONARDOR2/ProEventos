
using Microsoft.AspNetCore.Mvc;
using ProEventos1.API.Models;


namespace ProEventos1.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {

        private readonly DataContext _Context;
        public EventosController(DataContext dataContext)
        {
            _Context = dataContext;
        }

       [HttpGet]
        public ActionResult<IEnumerable<Event>> Get()
        {
            return Ok(_Context.Eventos);
        }

        [HttpGet("{id}")]
        public ActionResult<Event> GetById(int id)
        {
            var evento = _Context.Eventos.FirstOrDefault(e => e.EventoId == id);

            if (evento == null)
                return NotFound();

            return Ok(evento);
        }

        [HttpPost]
        public IActionResult Post([FromBody] string message)
        {
            return Ok($"{message} + olá mundo");
        }

        [HttpPut()]
        public IActionResult Put([FromBody]int id)
        {
            if (id >= 1 && id <= 10)
                return Ok($"{id} item alterado com sucesso");
            else
                return BadRequest($"{id} não existe");
        }

        
         [HttpDelete()]
        public IActionResult Delete([FromBody]int id)
        {
            if (id >= 1 && id <= 10)
                return Ok($"{id} item deletado com sucesso");
            else
                return BadRequest($"{id} não existe");
        }

      
    }
}