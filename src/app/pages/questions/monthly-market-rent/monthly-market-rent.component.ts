import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-monthly-market-rent',
  templateUrl: './monthly-market-rent.component.html',
  styleUrls: ['./monthly-market-rent.component.scss']
})
export class MonthlyMarketRentComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
