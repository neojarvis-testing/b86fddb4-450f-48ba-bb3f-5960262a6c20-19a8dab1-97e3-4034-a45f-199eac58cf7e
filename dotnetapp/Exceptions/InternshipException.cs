
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetapp.Exceptions
{
    public class InternshipException : Exception
    {
        public InternshipException(string message):base(message){
            
        }
    }
}