using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;


namespace dotnetapp.Models
{
    public class User
    {
        [Key]
        public int UserId{get; set;}
        public string Email{get set;}
        public string Password{get;set;}
        public string UserName{get; set;}
        public string MobileNumber{get; set;}
        public string UserRole{get}       
    }
}