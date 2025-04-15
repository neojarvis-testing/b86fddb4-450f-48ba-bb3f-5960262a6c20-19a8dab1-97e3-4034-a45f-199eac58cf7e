// import { Component, OnInit } from '@angular/core';
// import { InternshipService } from 'src/app/services/internship.service';


// @Component({
//   selector: 'app-requestedinternship',
//   templateUrl: './requestedinternship.component.html',
//   styleUrls: ['./requestedinternship.component.css']
// })
// export class RequestedInternshipComponent implements OnInit {
//   requestedInternships: any[] = [];
//   searchTerm: string = '';

//   constructor(private internshipService: InternshipService) {}

//   ngOnInit(): void {
//     this.loadRequestedInternships();
//   }

//   loadRequestedInternships(): void {
//     this.internshipService.getAllInternshipsApplication().subscribe((data: any[]) => {
//       this.requestedInternships = data;
//     });
//   }

//   search(): void {
//     if (this.searchTerm) {
//       this.requestedInternships = this.requestedInternships.filter(internship =>
//         internship.degreeProgram.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     } else {
//       this.loadRequestedInternships();
//     }
//   }

//   approveInternship(id: number): void {
//     this.internshipService.approveInternship(id).subscribe(() => {
//       this.loadRequestedInternships();
//     });
//   }

//   rejectInternship(id: number): void {
//     this.internshipService.rejectInternship(id).subscribe(() => {
//       this.loadRequestedInternships();
//     });
//   }

//   viewResume(url: string): void {
//     window.open(url, '_blank');
//   }

//   viewDegreeProgramChart(): void {
//     // Logic to view degree program chart
//   }
// }
