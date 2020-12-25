import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-purchase-or-refinance',
  templateUrl: './purchase-or-refinance.component.html',
  styleUrls: ['./purchase-or-refinance.component.scss']
})
export class PurchaseOrRefinanceComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.purchaseOrRefi = value;
    console.log('Purchase or Refi:', this.data.purchaseOrRefi);
  }

}
