import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';
@Component({
  selector: 'app-purchase-price',
  templateUrl: './purchase-price.component.html',
  styleUrls: ['./purchase-price.component.scss']
})
export class PurchasePriceComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
