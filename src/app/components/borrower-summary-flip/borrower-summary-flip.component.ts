import { Component, OnInit } from '@angular/core';
import { BorrowersEntityComponent } from 'src/app/pages/questions/borrowers-entity/borrowers-entity.component';
import { BorrowerDataService } from '../../../app/services/borrower-data.service';

@Component({
  selector: 'app-borrower-summary-flip',
  templateUrl: './borrower-summary-flip.component.html',
  styleUrls: ['./borrower-summary-flip.component.scss']
})
export class BorrowerSummaryFlipComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
