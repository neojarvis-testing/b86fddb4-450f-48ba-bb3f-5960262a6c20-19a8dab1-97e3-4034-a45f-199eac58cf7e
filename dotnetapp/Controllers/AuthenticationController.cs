using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using dotnetapp.Services;

namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthenticationController(IAuthService authService)
        {
            _authService = authService;
        }

        // POST: api/authentication/register
        [HttpPost("register")]
         [Authorize(Roles = "Admin","User")]
        [Consumes("application/json")]
        [Produces("application/json")]
        public async Task<IActionResult> Register([FromBody] User model)
        {
            if (!ModelState.IsValid)
                return BadRequest(new { Message = "Invalid registration request." });

            var result = await _authService.Registration(model, model.UserRole);
            if (result.Item1 == 0)
                return BadRequest(new { message = result.Item2 });

            return Ok(new { message = result.Item2 });
        }

        // POST: api/authentication/login
        [HttpPost("login")]
         [Authorize(Roles = "Admin","User")]
        [Consumes("application/json")]
        [Produces("application/json")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(new {Message = "Invalid login request."});

            var result = await _authService.Login(model);
            if (result.Item1 == 0)
                return Unauthorized(new { message = result.Item2 });

            return Ok(new { token = result.Item2 });
        }
    }
}
