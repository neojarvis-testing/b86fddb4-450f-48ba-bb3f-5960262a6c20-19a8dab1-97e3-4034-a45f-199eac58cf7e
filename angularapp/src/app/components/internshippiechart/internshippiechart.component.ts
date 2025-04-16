import { Component } from '@angular/core';
//import { ChartType, ChartData, ChartOptions } from 'chart.js';

interface DegreeProgram {
  name: string;
  percentage: number;
}

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
}
