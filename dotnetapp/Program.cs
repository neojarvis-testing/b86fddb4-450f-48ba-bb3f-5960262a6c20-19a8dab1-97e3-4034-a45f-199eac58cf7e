<<<<<<< HEAD
=======
using Microsoft.EntityFrameworkCore;
using dotnetapp.Data;

>>>>>>> f12019f468c5e83825ead3363e8a09d1adf2c50e
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
<<<<<<< HEAD
=======
builder.Services.AddDbContext<ApplicationDbContext>(db =>{
    db.UseSqlServer(builder.Configuration.GetConnectionString("conn"));
});
>>>>>>> f12019f468c5e83825ead3363e8a09d1adf2c50e

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
