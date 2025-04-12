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
            var res = await _context.InternshipApplicationApplications.ToListAsync();
            return res;
        }

        public async Task<InternshipApplication> GetInternshipApplicationById(int internshipApplicationId){
            var res = await _context.InternshipApplicationApplications.FindAsync(internshipApplicationId);
            return res;
        }

        public async Task<bool> AddInternshipApplication(InternshipApplication internshipApplicationApplication){
            var res = await _context.InternshipApplicationApplications.FirstOrDefaultAsync(obj=> obj.CompanyName.Equals(internshipApplicationApplication.CompanyName));
            if(res != null){
                throw new InternshipApplicationException("Company with the same name already exists.");
            }
            await _context.InternshipApplicationApplications.AddAsync(internshipApplicationApplication);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UpdateInternshipApplication(int internshipApplicationApplicationId, InternshipApplication internshipApplicationApplication){
            var res = await _context.InternshipApplicationApplications.FindAsync(internshipApplicationApplicationId);
            if(res == null){
                return false;
            }
            res = await _context.InternshipApplicationApplications.FirstOrDefaultAsync(obj=> obj.CompanyName.Equals(internshipApplicationApplication.CompanyName));
            if(res != null){
                throw new InternshipApplicationException("Company with the same name already exists.");
            }
           
            _context.Entry(res).CurrentValues.SetValues(internshipApplicationApplication);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteInternshipApplication(int internshipApplicationApplicationId){
            var res = await _context.InternshipApplicationApplications.FindAsync(internshipApplicationApplicationId);
            if(res == null){
                return false;
            }
            var exist = await _context.InternshipApplicationApplications.AnyAsync(obj => obj.InternshipApplicationId == internshipApplicationApplicationId);
            if(!exist){
                throw new InternshipApplicationException("InternshipApplication cannot be deleted, it is referenced in internshipApplicationApplicationapplication");
            }
            _context.InternshipApplicationApplications.Remove(res);
            await _context.SaveChangesAsync();
            return true;
        }
        
    }
    
}