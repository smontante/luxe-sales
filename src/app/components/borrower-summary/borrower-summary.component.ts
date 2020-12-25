import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../services/borrower-data.service';

@Component({
  selector: 'app-borrower-summary',
  templateUrl: './borrower-summary.component.html',
  styleUrls: ['./borrower-summary.component.scss']
})
export class BorrowerSummaryComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {

  }

}
