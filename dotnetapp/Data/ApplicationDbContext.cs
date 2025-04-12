using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions option):base(option){

        }
        public DbSet<User> Users{get; set;}
        public DbSet<Internship> Internships{get; set;}
        public DbSet<InternshipApplication> InternshipApplications{get; set;}
        public DbSet<Feedback> Feedbacks{get; set;}
        
    }
}