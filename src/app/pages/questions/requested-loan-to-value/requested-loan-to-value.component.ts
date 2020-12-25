import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-requested-loan-to-value',
  templateUrl: './requested-loan-to-value.component.html',
  styleUrls: ['./requested-loan-to-value.component.scss']
})
export class RequestedLoanToValueComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
