using Newtonsoft.Json;
using Telegram.Bot.Types;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Telegram.Bot;
using Presentation.Common;
using Presentation.Telegram;
using Presentation.Common.Domain.Contexts;
using Presentation.Common.Domain.Configurations;
using Presentation.Middlewares;

var builder = WebApplication.CreateBuilder(args);

// Add configuration to read environment variables
builder.Configuration.AddEnvironmentVariables();

IConfiguration configuration = builder.Configuration;

builder.Services.AddCors(
    option => option.AddDefaultPolicy(
        builder => builder
            .AllowAnyMethod().AllowAnyHeader()
            .AllowCredentials().SetIsOriginAllowed(origin => true)));

// Retrieve JWT and Telegram settings from environment variables
builder.Services.Configure<TokenConfiguration>(options =>
{
    options.Secret = Environment.GetEnvironmentVariable("JWT_SECRET");
    options.Issuer = Environment.GetEnvironmentVariable("JWT_ISSUER");
    options.Audience = Environment.GetEnvironmentVariable("JWT_AUDIENCE");
    options.AccessTokenExpiration = int.Parse(Environment.GetEnvironmentVariable("JWT_ACCESS_TOKEN_EXPIRATION") ?? "60");
    options.RefreshTokenExpiration = int.Parse(Environment.GetEnvironmentVariable("JWT_REFRESH_TOKEN_EXPIRATION") ?? "60");
});

builder.Services.Configure<TelegramConfiguration>(options =>
{
    options.Token = Environment.GetEnvironmentVariable("TELEGRAM_TOKEN");
    options.Owner = long.Parse(Environment.GetEnvironmentVariable("TELEGRAM_OWNER") ?? "0");
    options.Admins = Environment.GetEnvironmentVariable("TELEGRAM_ADMINS")?.Split(',').Select(long.Parse).ToList() ?? new List<long>();
    options.WebUrl = Environment.GetEnvironmentVariable("TELEGRAM_WEB_URL");
    options.Channels = JsonConvert.DeserializeObject<List<Channel>>(Environment.GetEnvironmentVariable("TELEGRAM_CHANNELS") ?? "[]");
});

var configurationJWT = new TokenConfiguration
{
    Secret = Environment.GetEnvironmentVariable("JWT_SECRET"),
    Issuer = Environment.GetEnvironmentVariable("JWT_ISSUER"),
    Audience = Environment.GetEnvironmentVariable("JWT_AUDIENCE"),
    AccessTokenExpiration = int.Parse(Environment.GetEnvironmentVariable("JWT_ACCESS_TOKEN_EXPIRATION") ?? "60"),
    RefreshTokenExpiration = int.Parse(Environment.GetEnvironmentVariable("JWT_REFRESH_TOKEN_EXPIRATION") ?? "60")
};

var configurationTelegram = new TelegramConfiguration
{
    Token = Environment.GetEnvironmentVariable("TELEGRAM_TOKEN"),
    Owner = long.Parse(Environment.GetEnvironmentVariable("TELEGRAM_OWNER") ?? "0"),
    Admins = Environment.GetEnvironmentVariable("TELEGRAM_ADMINS")?.Split(',').Select(long.Parse).ToList() ?? new List<long>(),
    WebUrl = Environment.GetEnvironmentVariable("TELEGRAM_WEB_URL"),
    Channels = JsonConvert.DeserializeObject<List<Channel>>(Environment.GetEnvironmentVariable("TELEGRAM_CHANNELS") ?? "[]")
};

builder.Services.AddHttpClient("telegram_bot_client")
    .AddTypedClient<ITelegramBotClient>((httpClient, sp) =>
    {
        TelegramBotClientOptions options = new(configurationTelegram.Token);
        return new TelegramBotClient(options, httpClient);
    });

builder.Services.AddScoped<UpdateHandler>();

builder.Services.AddControllers()
    .AddNewtonsoftJson();

builder.Services.AddTransient<UnitOfWork>();

builder.Services.AddAutoMapper(typeof(Program));

// Retrieve MySQL connection string from environment variables
var mySqlConnection = Environment.GetEnvironmentVariable("MYSQL_CONNECTION");

builder.Services.AddDbContext<ApplicationDBContext>(
    x => x.UseMySql(mySqlConnection, new MySqlServerVersion(new Version(8, 0, 29))));

builder.Services.AddAuthentication(options =>
{
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.SaveToken = false;
    options.RequireHttpsMetadata = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ClockSkew = TimeSpan.Zero,
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = configurationJWT.Issuer,
        ValidAudience = configurationJWT.Audience,
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(configurationJWT.Secret)),
    };
});

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors();

app.UseStaticFiles();

app.UseRouting();

app.UseMiddleware<ExceptionMiddleware>();

app.UseAuthentication();

app.UseAuthorization();

app.UseStaticFiles();

app.MapControllers();

app.Run();