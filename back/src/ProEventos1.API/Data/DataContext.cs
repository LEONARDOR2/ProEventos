
using Microsoft.EntityFrameworkCore;
using ProEventos1.API.Models;

public class DataContext : DbContext
{


  public DataContext(DbContextOptions<DataContext> options) : base(options)
  {

  }

  public DbSet<Event> Eventos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Event>()
            .HasKey(e => e.EventoId);  // Define explicitamente a chave primária
    }


}