import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-investment-property-flips',
  templateUrl: './investment-property-flips.component.html',
  styleUrls: ['./investment-property-flips.component.scss']
})
export class InvestmentPropertyFlipsComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

}
