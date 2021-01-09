import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-mortgage-broker-check',
  templateUrl: './mortgage-broker-check.component.html',
  styleUrls: ['./mortgage-broker-check.component.scss']
})
export class MortgageBrokerCheckComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.currentMortgageBrokerFlip = value;
  }

}
