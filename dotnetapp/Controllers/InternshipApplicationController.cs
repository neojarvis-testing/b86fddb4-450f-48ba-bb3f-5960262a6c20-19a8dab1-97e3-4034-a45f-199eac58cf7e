using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Authorization;
using dotnetapp.Exceptions;

namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InternshipApplicationController : ControllerBase
    {
        private readonly InternshipApplicationService _service;

        public InternshipApplicationController(InternshipApplicationService service)
        {
            _service = service;
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<InternshipApplication>>> GetAllInternshipApplications()
        {
            try
            {
                var applications = await _service.GetAllInternshipApplications();
                return Ok(applications);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        [Produces("application/json")]
        public async Task<ActionResult<InternshipApplication>> GetInternshipApplicationByUserId(int id)
        {
            try
            {
                var application = await _service.GetInternshipApplicationByUserId(id);
                if (application == null)
                {
                    return NotFound();
                }
                return Ok(application);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("create")]
        [Authorize(Roles = "Admin")]
        [Consumes("application/json")]
        [Produces("application/json")]
        public async Task<ActionResult> AddInternshipApplication([FromBody] InternshipApplication internshipApplication)
        {
            try
            {
                await _service.AddInternshipApplication(internshipApplication);
                return StatusCode(201);
            }
            catch (InternshipException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{internshipApplicationId}")]
        [Authorize(Roles = "Admin,User")]
        public async Task<ActionResult> UpdateInternshipApplication(int internshipApplicationId, [FromBody] InternshipApplication internshipApplication)
        {
            try
            {
                var updated = await _service.UpdateInternshipApplication(internshipApplicationId, internshipApplication);
                if (!updated)
                {
                    return NotFound(new {Message = "Cannot find any internship application"});
                }
                return Ok(new {Message = "Internship application updated successfully"});
            }
            catch (InternshipException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error response {ex.Message}");
            }
        }

        [HttpDelete("{internshipApplicationId}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> DeleteInternshipApplication(int internshipApplicationId)
        {
            try
            {
                var deleted = await _service.DeleteInternshipApplication(internshipApplicationId);
                if (!deleted)
                {
                    return NotFound();
                }
                return NoContent();
            }
            catch (InternshipException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
