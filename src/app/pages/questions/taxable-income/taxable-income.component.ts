import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-taxable-income',
  templateUrl: './taxable-income.component.html',
  styleUrls: ['./taxable-income.component.scss']
})
export class TaxableIncomeComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.taxableIncome = value;
  }

}
