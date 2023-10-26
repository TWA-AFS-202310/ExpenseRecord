using ExpenseRecord.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddCors(policy =>

{

    policy.AddPolicy("CorsPolicy", opt => opt

        .AllowAnyOrigin()

        .AllowAnyHeader()

        .AllowAnyMethod()

        .WithExposedHeaders("X-Pagination"));

});

builder.Services.AddSingleton<IExpenseService, ExpenseService>();
builder.Services.Configure<DataBaseSetting>(builder.Configuration.GetSection("ExpenseDatabases"));


var app = builder.Build();
app.UseCors("CorsPolicy");

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");
;

app.Run();

public partial class Program { }