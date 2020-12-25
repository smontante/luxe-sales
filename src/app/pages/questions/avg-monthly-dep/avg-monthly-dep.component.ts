import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-avg-monthly-dep',
  templateUrl: './avg-monthly-dep.component.html',
  styleUrls: ['./avg-monthly-dep.component.scss']
})
export class AvgMonthlyDepComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
