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
    public async Task<ActionResult<IEnumerable<Feedback>>> GetUserFeedbacks(int userId)
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
