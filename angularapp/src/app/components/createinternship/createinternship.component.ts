 import { Component, OnInit } from '@angular/core';
 import { Internship } from 'src/app/models/internship.model';
 import { ActivatedRoute, Router } from '@angular/router';
 import { FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms';
 import { InternshipService } from 'src/app/services/internship.service';

<<<<<<< HEAD
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createinternship',
  templateUrl: './createinternship.component.html',
=======
 import Swal from 'sweetalert2';
 @Component({
   selector: 'app-createinternship',
   templateUrl: './createinternship.component.html',
>>>>>>> 6de53d0fbe3faad99965f5d24cc697c09b6c4281
  styleUrls: ['./createinternship.component.css']
})
export class CreateinternshipComponent implements OnInit {  
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
// internshipId:number;

message: string = '';
isLoggedIn: boolean = false;
showModal: boolean = false;
showModalOnce: boolean = false;
  constructor(private route:ActivatedRoute,private internshipService:InternshipService,private router:Router) { }
  
  
 ngOnInit(): void {
  this.checkLoginStatus();
}
checkLoginStatus(): void {
  const token = localStorage.getItem('token');
  if (token) {
    this.isLoggedIn = true;
  } else {
    this.isLoggedIn = false;
    this.showErrorMessage('Please log in to add an Internship.');
    // this.route.navigate(['/login']);
  }
}
   

addInternship(form:NgForm)
{
  if (!this.isLoggedIn) {
    this.showErrorMessage('Please log in first');
    return;
  }
<<<<<<< HEAD
 
  editAdminInternship(form:any):void
  {
    this.formSubmitted=true;
    if(this.internship.Title &&this.internship.CompanyName && this.internship.Location && this.internship.DurationInMonths && this.internship.Stipend && this.internship.Description && this.internship.SkillsRequired && this.internship.ApplicationDeadline)
    {
      this.internshipService.updateInternship(this.internshipId,this.internship).subscribe(()=>
      {
        Swal.fire({
          title: 'Updated successfully',
          confirmButtonText: 'Ok'
        }).then((res) => {
          if (res.isConfirmed) {
           // this.router.navigate(['/viewinternship']);
          }
        });
      }, error => {
        this.handleError(error);
      });
    }
  }

  handleError(error: any): void {
    if (error.status === 500) {
      this.errorMessage = "An internship with the same title already exists.";
    } else {
      this.errorMessage = "An unexpected error occurred. Please try again.";
=======
  if (form.invalid || !this.customValidation()) {
    return;
  }
  this.internshipService.addInternship(this.internship).subscribe({
    next: () => {
      this.router.navigate(['/viewinternships']);
      this.showSuccessMessage('Internship added successfully');
      this.showModal = true; // Show the modal on success
    },
    error: (error) => {
      console.error('Error adding internship:', error);
      if (error.error && error.error.Message && error.error.Message.includes('Internship with the same name already exists')) {
        this.showErrorMessage('An Internship with this name already exists. Please choose a different name.');
      } else {
        this.showErrorMessage('Error adding Internship');
      }
      this.showModal = true; // Show the modal on error
>>>>>>> 6de53d0fbe3faad99965f5d24cc697c09b6c4281
    }
  });
}
customValidation(): boolean {
  const { Title, CompanyName, Location, DurationInMonths, Stipend, Description, SkillsRequired, ApplicationDeadline } = this.internship;
  if (Title.length > 50) {
    this.showErrorMessage('Title must be less than 50 characters');
    return false;
  }
<<<<<<< HEAD

  closeModal(): void {
    this.showModal = false;
  }
=======
  if (CompanyName.length > 30) {
    this.showErrorMessage('Company Name must be less than 30 characters');
    return false;
  }
  if (Location.length > 50) {
    this.showErrorMessage('Location must be less than 50 characters');
    return false;
  }
  if (DurationInMonths> 2) {
    this.showErrorMessage('Duration must be less than 100 characters');
    return false;
  }
 
  if (Stipend < 0) {
    this.showErrorMessage('Stipend must be a positive number');
    return false;
  }
  if (Description.length > 200) {
    this.showErrorMessage('Description must be less than 200 characters');
    return false;
  }
  if (SkillsRequired.length > 30) {
    this.showErrorMessage('Skills Required must be less than 30 characters');
    return false;
  }
  // if (ApplicationDeadline.length > 200) {
  //   this.showErrorMessage('Special Requirements must be less than 200 characters');
  //   return false;
  // }
  return true;
>>>>>>> 6de53d0fbe3faad99965f5d24cc697c09b6c4281
}

validateField(form: NgForm, fieldName: string) {
  const control = form.controls[fieldName];
  if (control && control.errors) {
    control.markAsDirty();
  }
}
closeModal() {
  this.showModal = false;  // Close the modal
  this.showModalOnce = false; // Reset the flag
}
showErrorMessage(message: string): void {
  this.message = message;
  Swal.fire({
    title: 'Error!',
    text: message,
    confirmButtonText: 'OK'
  });
}
showSuccessMessage(message: string): void {
  this.message = message;
  Swal.fire({
    title: 'Success!',
    text: message,
    confirmButtonText: 'OK'
  });
}
}


