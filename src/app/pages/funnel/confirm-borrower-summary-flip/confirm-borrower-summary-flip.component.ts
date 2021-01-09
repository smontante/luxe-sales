import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-confirm-borrower-summary-flip',
  templateUrl: './confirm-borrower-summary-flip.component.html',
  styleUrls: ['./confirm-borrower-summary-flip.component.scss']
})
export class ConfirmBorrowerSummaryFlipComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
