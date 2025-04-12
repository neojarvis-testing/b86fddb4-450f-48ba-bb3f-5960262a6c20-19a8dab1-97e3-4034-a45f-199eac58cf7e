using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;

namespace dotnetapp.Models
{
    public class Internship
    {
        [Key]
        public int InternshipId{get; set;}
        public string Title{get; set;}
        public string CompanyName{get; set;}
        public string Location{get; set;}
        public int DurationInMonths{get; set;}
        public decimal stipend{get; set;}
        public string Description{get; set;}
        public string SkillsRequired{get; set;}
        public string ApplicationDeadline{get; set;}    
    }
}