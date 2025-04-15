using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Authorization;




namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InternshipController : ControllerBase
    {

           
        private readonly InternshipService _internshipService;

        public InternshipController(InternshipService internshipService)
        {
            _internshipService = internshipService;
        }

        // 1. Get all internships
        [HttpGet]
         [Authorize(Roles = "Admin,User")]
        [Consumes("application/json")]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<Internship>>> GetAllInternships()
        {
            try
            {
                var internships = await _internshipService.GetAllInternships();
                return Ok(internships);
            }
            catch
            {
                return StatusCode(500, "Cannot retrieve internships.");
            }
        }

        // 2. Get internship by ID
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Internship>> GetInternshipById(int id)
        {
            try
            {
                var internship = await _internshipService.GetInternshipById(id);
                if (internship == null)
                {
                    return NotFound("Cannot find any internship.");
                }
                return Ok(internship);
            }
            catch
            {
                return StatusCode(500, "Cannot retrieve internship.");
            }
        }

        // 3. Add new internship
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> AddInternship([FromBody] Internship newInternship)
        {
            try
            {
                await _internshipService.AddInternship(newInternship);

                return StatusCode(200, "Internship added successfully");
            }
            catch
            {
                return StatusCode(500, "Cannot add internship.");
            }
        }

        // 4. Update internship
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> UpdateInternship(int internshipId, [FromBody] Internship internship)
        {
            try
            {
                var updated = await _internshipService.UpdateInternship(internshipId, internship);
                if (!updated)
                {
                    return NotFound("Cannot find any internship.");
                }
                return Ok("Internship updated successfully.");
            }
            catch
            {
                return StatusCode(500, "Cannot update internship.");
            }
        }

        // 5. Delete internship
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> DeleteInternship(int internshipId)
        {
            try
            {
                var deleted = await _internshipService.DeleteInternship(internshipId);
                if (!deleted)
                {
                    return NotFound("Cannot find any internship.");
                }
                return Ok("Internship deleted successfully.");
            }
            catch
            {
                return StatusCode(500, "Cannot delete internship.");
            }
        }
   
        
    }
}