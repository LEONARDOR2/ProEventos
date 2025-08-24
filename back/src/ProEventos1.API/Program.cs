using Microsoft.EntityFrameworkCore;

namespace ProEventos1
{

    public class Program
   {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Aqui você acessa a configuração direto do builder
            builder.Services.AddDbContext<DataContext>(options =>
                options.UseSqlite(builder.Configuration.GetConnectionString("Default"))
            );

            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.MapControllers();

            app.Run();
        }
    }

}