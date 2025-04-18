import { Component } from '@angular/core';
//import { ChartType, ChartData, ChartOptions } from 'chart.js';
import { InternshipService } from 'src/app/services/internship.service';
import { Chart } from 'chart.js';
 
// interface DegreeProgram {
//   name: string;
//   percentage: number;
// }
 
@Component({
  selector: 'app-internshippiechart',
  templateUrl: './internshippiechart.component.html',
  styleUrls: ['./internshippiechart.component.css']
})
export class InternshippiechartComponent {
//   newProgram: DegreeProgram = { name: '', percentage: 0 };
//   programs: DegreeProgram[] = [];
 
//   public pieChartLabels: string[] = [];
//   public pieChartData: ChartData<'pie'> = {
//     labels: [],
//     datasets: [{ data: [] }]
//   };
//   public pieChartType: ChartType = 'pie';
//   public pieChartOptions: ChartOptions<'pie'> = {
//     responsive: true,
//   };
 
//   addProgram() {
//     this.programs.push({ ...this.newProgram });
//     this.updateChart();
//     this.newProgram = { name: '', percentage: 0 };
//   }
 
//   updateChart() {
//     this.pieChartLabels = this.programs.map(program => program.name);
//     this.pieChartData = {
//       labels: this.pieChartLabels,
//       datasets: [{ data: this.programs.map(program => program.percentage) }]
//     };
//   }
 
 
 
  constructor(private internshipService: InternshipService) {}
 
  ngOnInit() {
    this.internshipService.getAllInternshipApplications().subscribe(data => {
      const degreePrograms = data.map(app => app.DegreeProgram);
      const degreeCounts = degreePrograms.reduce((acc, program) => {
        acc[program] = (acc[program] || 0) + 1;
        return acc;
      }, {});
 
      const labels = Object.keys(degreeCounts);
      const values = Object.values(degreeCounts);
 
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
    });
  }
 
}