import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from 'src/app/services/borrower-data.service';

@Component({
  selector: 'app-confirm-borrower-summary',
  templateUrl: './confirm-borrower-summary.component.html',
  styleUrls: ['./confirm-borrower-summary.component.scss']
})
export class ConfirmBorrowerSummaryComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
