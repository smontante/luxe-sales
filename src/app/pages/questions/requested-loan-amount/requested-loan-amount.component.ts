import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-requested-loan-amount',
  templateUrl: './requested-loan-amount.component.html',
  styleUrls: ['./requested-loan-amount.component.scss']
})
export class RequestedLoanAmountComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
