import { Component, OnInit } from '@angular/core';
import { InternshipService } from 'src/app/services/internship.service';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

@Component({
  selector: 'app-internshippiechart',
  templateUrl: './internshippiechart.component.html',
  styleUrls: ['./internshippiechart.component.css']
})
export class InternshippiechartComponent implements OnInit {
  hasData = false;

  constructor(private internshipService: InternshipService) {}

  ngOnInit() {
    Chart.register(PieController, ArcElement, Tooltip, Legend);

    this.internshipService.getAllInternshipApplications().subscribe(data => {
      const degreePrograms = data.map(app => app.DegreeProgram);
      const degreeCounts = degreePrograms.reduce((acc, program) => {
        acc[program] = (acc[program] || 0) + 1;
        return acc;
      }, {});

      const labels = Object.keys(degreeCounts);
      const values = Object.values(degreeCounts);

      // Check if there is data to show
      if (values.length > 0) {
        this.hasData = true;
        new Chart('degreeChart', {
          type: 'pie',
          data: {
            labels,
            datasets: [{
              data: values,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      } else {
        this.hasData = false;
      }
    });
  }
}
