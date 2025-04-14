import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Internship } from 'src/app/models/internship.model';
import { InternshipService } from 'src/app/services/internship.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-admineditinternship',
  templateUrl: './admineditinternship.component.html',
  styleUrls: ['./admineditinternship.component.css']
})
export class AdmineditinternshipComponent implements OnInit {
  internship:Internship=
  {
    Title:'',
    CompanyName:'',
    Location:'',
    DurationInMonths:0,
    Stipend:0,
    Description:'',
    SkillsRequired:'',
    ApplicationDeadline:''
  };
  formSubmitted:boolean=false;
  internshipId:number;
  errorMessage:string;

  constructor(private route:ActivatedRoute,private internshipService:InternshipService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>
      {
        
      });
  }

  editAdminInternship():void
  {
    this.formSubmitted=true;
    if(this.internship.Title &&this.internship.CompanyName && this.internship.Location && this.internship.DurationInMonths && this.internship.Stipend && this.internship.Description && this.internship.SkillsRequired && this.internship.ApplicationDeadline)
    {
      this.internshipService.updateInternship(this.internshipId,this.internship).subscribe(()=>
      {
        Swal.fire({
          title:'Updated successfully',
          confirmButtonText:'Ok'
        }).then((res)=>
        {
          console.log(res);
          if(res.isConfirmed)
          {
            window.location.href='/viewinternship';
          }

        });
      });

    } 
  }
  backbutton():void{
    this.router.navigate(['/viewinternship']);
  }

  }

