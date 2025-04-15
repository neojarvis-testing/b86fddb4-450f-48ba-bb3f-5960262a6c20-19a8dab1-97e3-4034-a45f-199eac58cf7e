using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Data;
using dotnetapp.Models;
using dotnetapp.Exceptions;

namespace dotnetapp.Services
{
    public class InternshipApplicationService{
        private readonly ApplicationDbContext _context;

        public InternshipApplicationService(ApplicationDbContext context){
            this._context = context;
        }

        public async Task<IEnumerable<InternshipApplication>> GetAllInternshipApplications(){
            var res = await _context.InternshipApplications.ToListAsync();
            return res;
        }

        public async Task<InternshipApplication> GetInternshipApplicationByUserId(int internshipApplicationId){
            var res = await _context.InternshipApplications.FindAsync(internshipApplicationId);
            return res;
        }

        public async Task<bool> AddInternshipApplication(InternshipApplication internshipApplication){
            var isAppliedByUser = await _context.InternshipApplications.AnyAsync(obj=> obj.UserId == internshipApplication.UserId );
            if(isAppliedByUser){
                throw new InternshipException("User already applied for this internship");
            }
            await _context.InternshipApplications.AddAsync(internshipApplication);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UpdateInternshipApplication(int internshipApplicationApplicationId, InternshipApplication internshipApplicationApplication){
            var res = await _context.InternshipApplications.FindAsync(internshipApplicationApplicationId);
            if(res == null){
                return false;
            }
           
            _context.Entry(res).CurrentValues.SetValues(internshipApplicationApplication);
            
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteInternshipApplication(int internshipApplicationId){
            var res = await _context.InternshipApplications.FindAsync(internshipApplicationId);
            if(res == null){
                return false;
            }
            var exist = await _context.InternshipApplications.AnyAsync(obj => obj.InternshipApplicationId == internshipApplicationId);
            if(!exist){
                throw new InternshipException("InternshipApplication cannot be deleted, it is referenced in internshipApplicationApplicationapplication");
            }
            _context.InternshipApplications.Remove(res);
            await _context.SaveChangesAsync();
            return true;
        }
        
    }
    
}