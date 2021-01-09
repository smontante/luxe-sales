import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-borrower-summary-flip',
  templateUrl: './borrower-summary-flip.component.html',
  styleUrls: ['./borrower-summary-flip.component.scss']
})
export class BorrowerSummaryFlipComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

}
