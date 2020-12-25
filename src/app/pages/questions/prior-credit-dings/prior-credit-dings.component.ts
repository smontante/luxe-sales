import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-prior-credit-dings',
  templateUrl: './prior-credit-dings.component.html',
  styleUrls: ['./prior-credit-dings.component.scss']
})
export class PriorCreditDingsComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.majorCreditHit = value;
  }

}
