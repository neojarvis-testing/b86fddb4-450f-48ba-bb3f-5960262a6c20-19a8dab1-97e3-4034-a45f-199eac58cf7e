import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InternshipService } from 'src/app/services/internship.service';

@Component({
  selector: 'app-internshipform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.css']
})
export class InternshipformComponent implements OnInit {
  private intershipId: number;
  application: InternshipApplication = {
    UserId: 0,
    InternshipId: 0,
    UniversityName: '',
    DegreeProgram: '',
    Resume: '',
    ApplicationStatus: 'Pending',
    ApplicationDate: new Date()
  };

  constructor(private route: ActivatedRoute, private ser: InternshipService, private router: Router) {
    route.params.subscribe(
      (params) => {
        this.intershipId = + params[`id`];
      }
    )
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    //console.log(file);
    if(file){
      console.log("selected file", file);
      //const reader = new FileReader();
      this.application.Resume = URL.createObjectURL(file);
      // reader.onload = () => {
      //   console.log("Fle reader result ", reader.result);
      //   // this.application.Resume = reader.result as string;
      //   reader.onerror = (error)=>{
      //     console.log(error);
      //   }
      // }
      // reader.readAsText(file);
    }
  }
  // onFileLoad(file: File) {
  //   const fileReader = new FileReader();
  //   const fileName = file.name;

  //   if (fileName.endsWith('.pdf')) {
  //     this.fileType = 'pdf';
  //     this.selectedResumeUrl = URL.createObjectURL(file); // Generates temporary URL for the file
  //   } else if (fileName.endsWith('.txt')) {
  //     this.fileType = 'txt';
  //     fileReader.onload = () => {
  //       this.fileContent = fileReader.result as string; // Set text content
  //     };
  //     fileReader.readAsText(file);
  //   }
  // }

  onSubmit(): void {
    if (this.application.UniversityName && this.application.DegreeProgram && this.application.Resume) {
      console.log('Form submitted', this.application);
      this.application.UserId = Number(localStorage.getItem('userId'));
      this.application.InternshipId = this.intershipId;
      this.ser.addInternshipApplication(this.application).subscribe(
        (data) => {
          Swal.fire({
            title: 'Successfully Submitted!',
            text: 'Your application has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['user/userappliedinternships']);
            }
          });
        },
        (error) => {
          console.error('Error fetching internships', error);
        }
      );



    }
  }

  goBack(): void {
    this.router.navigate(['/userviewinternship']);
  }


  ngOnInit(): void {
  }

}

