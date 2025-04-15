import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternshipService } from 'src/app/services/internship.service';

@Component({
  selector: 'app-create-new-internship',
  templateUrl: './create-new-internship.component.html',
  styleUrls: ['./create-new-internship.component.css']
})
export class CreateNewInternshipComponent {
  internshipForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private internshipService: InternshipService) {
    this.internshipForm = this.fb.group({
      companyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      location: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required],
      stipend: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.internshipForm.valid) {
      this.internshipService.addInternship(this.internshipForm.value).subscribe(
        response => {
          this.successMessage = 'Successfully Added!!';
          this.errorMessage = '';
          this.internshipForm.reset();
        },
        error => {
          this.successMessage = '';
          this.errorMessage = 'Company with the same name already exists.';
        }
      );
    } else {
      this.successMessage = '';
      this.errorMessage = 'All fields are required.';
    }
  }
}
