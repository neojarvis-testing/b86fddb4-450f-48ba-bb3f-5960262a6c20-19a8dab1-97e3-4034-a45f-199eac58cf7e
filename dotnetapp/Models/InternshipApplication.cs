using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;

namespace dotnetapp.Models
{
    public class InternshipApplication
    {
        [Key]
        public int InternshipApplicationId{get; set;}
        public int UserId{get; set;}
        public User? User{get; set;}
        public int InternshipId{get; set;}
        public Internship? Internship{get; set;}
        public string UniversityName{get; set;}
        public string DegreeProgram{get; set;}
        public string Resume{get; set;}
        public string? LinkedInProfile{get; set;}
        public string ApplicationStatus{get; set;}
        public DateTime ApplicationDate{get; set;}
    }
}