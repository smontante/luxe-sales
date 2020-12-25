import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-investment-properties',
  templateUrl: './investment-properties.component.html',
  styleUrls: ['./investment-properties.component.scss']
})
export class InvestmentPropertiesComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.totalInvestmentProps = value;
    console.log('Total Investment Properties:', this.data.totalInvestmentProps);
  }

}
