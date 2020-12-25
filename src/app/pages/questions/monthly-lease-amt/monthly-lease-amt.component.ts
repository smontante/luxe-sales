import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-monthly-lease-amt',
  templateUrl: './monthly-lease-amt.component.html',
  styleUrls: ['./monthly-lease-amt.component.scss']
})
export class MonthlyLeaseAmtComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
