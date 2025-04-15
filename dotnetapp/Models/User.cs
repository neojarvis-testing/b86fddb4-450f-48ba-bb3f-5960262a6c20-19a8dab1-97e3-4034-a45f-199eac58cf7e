using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters.")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Username is required.")]
        [StringLength(50, ErrorMessage = "Username cannot exceed 50 characters.")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Mobile number is required.")]
        [Phone(ErrorMessage = "Invalid mobile number.")]
        [StringLength(15, ErrorMessage = "Mobile number cannot exceed 15 digits.")]
        public string MobileNumber { get; set; } 

        [Required(ErrorMessage = "User role is required.")]
        [StringLength(20, ErrorMessage = "User role cannot exceed 20 characters.")]
        public string UserRole { get; set; }
    }
}
