import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';
@Component({
  selector: 'app-property-insurance-cost',
  templateUrl: './property-insurance-cost.component.html',
  styleUrls: ['./property-insurance-cost.component.scss']
})
export class PropertyInsuranceCostComponent implements OnInit {

  constructor(public data: BorrowerDataService) { }

  ngOnInit(): void {
  }

}
