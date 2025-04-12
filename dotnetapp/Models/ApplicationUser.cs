using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using Microsoft.AspNetCore.Identity;

namespace dotnetapp.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        [StringLength(30)]
        public string Name{get; set;}
    }
}