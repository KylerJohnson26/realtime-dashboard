import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: Array<any>;

  constructor() { }

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to
    // reduce choppiness
    setTimeout(() => {
      this.generateData();
      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < 10; i++) {
      this
        .chartData
        .push([
          `Product ${i + 1}`, Math.floor(Math.random() * 100)
        ]);
    }
  }

}
