using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetapp.Models;
using dotnetapp.Services;
using dotnetapp.Data;

[Route("api/[controller]")]
[ApiController]
public class FeedbackController : ControllerBase
{
    private readonly FeedbackService _feedbackService;

    public FeedbackController(FeedbackService feedbackService)
    {
        _feedbackService = feedbackService;
    }

 
    [HttpGet]
     [Authorize(Roles = "Admin")]
        [Consumes("application/json")]
        [Produces("application/json")]
    public async Task<ActionResult<IEnumerable<Feedback>>> GetAllFeedbacks()
    {
        try
        {
            var feedbacks = await _feedbackService.GetAllFeedbacks();
            return Ok(feedbacks);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

   
    [HttpGet("user/{userId}")]
     [Authorize(Roles = "User")]
        [Consumes("application/json")]
        [Produces("application/json")]
    public async Task<ActionResult<IEnumerable<Feedback>>> GetUserFeedbacksByUserId(int userId)
    {
        try
        {
            var feedbacks = await _feedbackService.GetFeedbacksByUserId(userId);
            return Ok(feedbacks);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }


    [HttpPost]
     [Authorize(Roles = "User")]
        [Consumes("application/json")]
        [Produces("application/json")]
    public async Task<ActionResult> AddFeedback([FromBody] Feedback feedback)
    {
        try
        {
            var result = await _feedbackService.AddFeedback(feedback);
            if (result)
            {
                return CreatedAtAction(nameof(GetAllFeedbacks), new { id = feedback.FeedbackId }, feedback);
            }
            return StatusCode(500, "Error adding feedback.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpDelete("{id}")]
    
 [Authorize(Roles = "User")]
        [Consumes("application/json")]
        [Produces("application/json")]
    public async Task<ActionResult> DeleteFeedback(int id)
    {
        try
        {
            var result = await _feedbackService.DeleteFeedback(id);
            if (result)
            {
                return NoContent();
            }
            return NotFound("Cannot find this record");
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}
