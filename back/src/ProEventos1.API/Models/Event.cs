namespace ProEventos1.API.Models
{
    public class Event
    {
        
        public int EventoId { get; set; }
        public string? Local { get; set; }
        public string? DataEvento { get; set; }
        public string? Tema { get; set; }
        public string? QtdPessoas { get; set; }
        public string? Lote { get; set; }
        public string? ImagemURL { get; set; }     
    }
}