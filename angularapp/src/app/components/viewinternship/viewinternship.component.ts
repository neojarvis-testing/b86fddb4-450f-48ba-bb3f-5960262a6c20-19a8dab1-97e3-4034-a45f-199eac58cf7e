import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternshipService } from 'src/app/services/internship.service';


@Component({
  selector: 'app-viewinternship',
  templateUrl: './viewinternship.component.html',
  styleUrls: ['./viewinternship.component.css']
})
export class ViewinternshipComponent implements OnInit {
  internships: any[] = [];
  searchTerm: string = '';

  constructor(private internshipService: InternshipService, private router: Router) {}

  ngOnInit(): void {
    this.loadInternships();
  }

  loadInternships(): void {
    this.internshipService.getAllInternships().subscribe((data: any[]) => {
      this.internships = data;
    });
  }

  search(): void {
    if (this.searchTerm) {
      this.internships = this.internships.filter(internship =>
        internship.company.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        internship.location.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadInternships();
    }
  }

  editInternship(internship: any): void {
    this.router.navigate(['/admineditinternship', internship.id]);
  }

  deleteInternship(id: number): void {
    if (confirm('Are you sure you want to delete this internship?')) {
      this.internshipService.deleteInternship(id).subscribe(() => {
        this.loadInternships();
      });
    }
  }
}


